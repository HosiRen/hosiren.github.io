// Shim for backwards-compatibility with bundlers that do not
// support the 'exports' clause in package.json, to allow them
// to load the blockly/dart submodule entrypoint.
module.exports = require('./dart_compressed.js');
