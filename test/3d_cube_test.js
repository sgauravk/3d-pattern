const assert = require('assert');
const lib = require('../src/3d_cube_lib.js');
const pattern = require('./expectedOutput10.js').pattern;
const cubePattern = lib.cubePattern;

describe('cube pattern', function(){

  it('should return the single star while given side is 1', function(){
    assert.equal(cubePattern(1),'* ');
  });

  it('should work for small input like 2 and 3', function(){
    assert.equal(cubePattern(2),'* * \n** * \n * * ');
    assert.equal(cubePattern(3),'* * * \n**   * \n* * * * \n **   * \n  * * * ');
  });

  it('should return empty string for input 0', function(){
    assert.equal(cubePattern(0),'');
  });

  it('should return a cube for 10 side', function(){
    assert.equal(cubePattern(10),pattern);
  });

});
