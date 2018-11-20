const assert = require('assert');
const lib = require('./3d_cube_lib.js');
const cubePattern = lib.cubePattern;

assert.equal(cubePattern(1),'*');
assert.equal(cubePattern(2),'**\n***\n **');
assert.equal(cubePattern(3),'***\n** *\n* ***\n ** *\n  ***');

console.log("test passed...!");
