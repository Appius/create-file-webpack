'use strict';
var CreateFilePlugin = (function () {
    const write = require('write');
    const path = require('path');

    function CreateFilePlugin(options){
        if (options === void 0) { options = {}; }
        this.options = options;
    }

    CreateFilePlugin.prototype.apply = function (compiler) {
        const _this = this;

        compiler.plugin('done', function() {
            const fullPath = path.join(_this.options.path, _this.options.fileName);
            write.sync(fullPath, _this.options.content);
        });
    };

    return CreateFilePlugin;
})();

module.exports = CreateFilePlugin;
