const lib = require('./src/3d_cube_lib.js');
const cubePattern = lib.cubePattern;

const main = function(){
  let side = +process.argv[2]||0;
  if(side < 1){
    console.log("+------ invalid side ------+");
    process.exit();
  }
  let pattern = cubePattern(side);
  console.log(pattern);
}
main();
