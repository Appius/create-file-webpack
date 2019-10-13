'use strict';
var CreateFilePlugin = (function () {
  const write = require('write');
  const path = require('path');

  function CreateFilePlugin(options){
    if (options === void 0) {
      throw new Error(`Please provide 'options' for the CreateFilePlugin config`);
    }

    if (options.path == null) {
      throw new Error(`Please provide 'options.path' in the CreateFilePlugin config`);
    }

    if (options.fileName == null) {
      throw new Error(`Please provide 'options.fileName' in the CreateFilePlugin config`);
    }

    if (options.content == null) {
      throw new Error(`Please provide 'options.content' in the CreateFilePlugin config`);
    }

    this.options = options;
  }

  CreateFilePlugin.prototype.apply = function (compiler) {
    compiler.hooks.emit.tap({ name: 'CreateFileWebpack' }, compilation => {
      const relativePath = path.join(this.options.path, this.options.fileName);
      const targetPath = path.join(compiler.options.output.path, relativePath);

      write.sync(targetPath, this.options.content);

      compilation.assets[relativePath] = {
        source: () => this.options.content,
        size: () => this.options.content.length
      };
    });
  };

  return CreateFilePlugin;
})();

module.exports = CreateFilePlugin;
