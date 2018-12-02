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

  function _createFile(filePath, fileName, content) {
    return () => {
      const fullPath = path.join(filePath, fileName);
      write.sync(fullPath, content);
    }
  }

  CreateFilePlugin.prototype.apply = function (compiler) {
    const createFile = () => _createFile(this.options.path, this.options.fileName, this.options.content);

    if (!!compiler.hooks) {
      compiler.hooks.done.tap('CreateFileWebpack', createFile());
    } else {
      compiler.plugin('done', createFile());
    }
  };

  return CreateFilePlugin;
})();

module.exports = CreateFilePlugin;
