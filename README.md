# Create file plugin for WebPack
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Very simple plugin to create a file at the end of the build process with the particular text.

## Installation
```
npm i create-file-webpack --save-dev
```

## Usage
```js
const CreateFileWebpack = require('create-file-webpack')

// webpack config
{
  plugins: [
    new CreateFileWebpack({options})
  ]
}
```

## List of possible options:

````js
var opts = {
    // path to folder in which the file will be created
    path: './dist',
    // file name
    fileName: 'index.js',
    // content of the file
    content: 'export * from ./module.umd.js'
};
````
