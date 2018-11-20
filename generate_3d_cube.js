const lib = require('./3d_cube_lib.js');
const cubePattern = lib.cubePattern;

const main = function(){
  let side = process.argv[2];
  if(side<1 || typeof(side) != 'number'){
    console.log("+------ invalid side ------+");
    process.exit();
  }
  let pattern = cubePattern(+side);
  console.log(pattern);
}
main();
