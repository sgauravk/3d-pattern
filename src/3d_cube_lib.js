const generateLine = function(character,length){
  return new Array(length).fill(character).join('');
};

const generateMiddleLine = function(character,length){
  let  line = character;
  if(length>1){
    line = line + generateLine('  ',length-2) + character;
  }
  return line;
}

const firstHalfCube = function(side){
  let pattern = [];
  let gap = 0;
  pattern[0] = generateLine('* ',side);
  for(let count=1; count<side-1; count++){
    pattern[count] = '*'+generateLine(' ',gap)+generateMiddleLine('* ',side);
    gap++;
  }
  if(side>1){
    pattern[side-1] = '*'+generateLine(' ',gap)+generateLine('* ',side);
  }
  return pattern;
};

const secondHalfCube = function(side){
  let gap1 = side-3;
  let gap2 = 1;
  for(let count=side; count<2*side-2; count++){
    pattern[count] = generateLine(' ',gap2)+'*'+generateLine(' ',gap1)+generateMiddleLine('* ',side);
    gap1--;
    gap2++;
  }
  if(side>1){
    pattern[2*side-2] = generateLine(' ',gap2)+generateLine('* ',side);
  }
  return pattern;
};

const cubePattern = function(side){
  let cube = '';
  let delemiter = '';
  pattern = firstHalfCube(side);
  pattern = secondHalfCube(side);
  for(let count=0; count<pattern.length; count++){
    cube = cube + delemiter + pattern[count];
    delemiter = '\n'
  }
  return cube;
};
  
exports.cubePattern = cubePattern;
