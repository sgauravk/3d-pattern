const generateLine = function(character,length){
  return new Array(length).fill(character).join('');
};

const generateMiddleLine = function(character,length){
  let  line = character;
  if(length>1){
    line = line + generateLine(' ',length-2) + character;
  }
  return line;
}

const topCuboid = function(length,width){
  let pattern = [];
  let gap = 1;
  pattern[0] = generateLine('*',length);
  for(let count=1; count<width-1; count++){
    pattern[count] = generateLine(' ',gap)+generateMiddleLine('*',length);
    gap++;
  }
  if(width>1){
    pattern[width-1] = generateLine(' ',gap)+generateLine('*',length);
  }
  return pattern;
};

console.log(topCuboid(+process.argv[2],process.argv[3]));
