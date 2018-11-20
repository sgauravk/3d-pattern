const generateMiddleLines = function(symbol1,symbol2){
  return function(length){
    let middleLines = symbol1;
    if (length > 1){
      middleLines = middleLines 
        +generateLine(" ")(length-2) 
        +symbol2;
    }
    return middleLines;
  }
};

const generateLine = function(character){
  return function(length){
    return new Array(length).fill(character).join('');
  }
};

const halfCube = function(side){
  let gaps = 0;
  let pattern = [];
  for(let i=0; i<side; i++){
    if(i == 0 || i == side-1){
      pattern[i] = '*'+generateLine(' ')(gaps) + generateLine('*')(side);
    } else {
      pattern[i] = '*'+generateLine(' ')(gaps) + generateMiddleLines('*','*')(side);
    }
    gaps++;
  }
  return pattern;
};
pattern = halfCube(+process.argv[2]);

const secondHalf = function(side){
  let gaps = side-2;
  let gaps2 = 1;
  for(let i=side; i<2*side-1; i++){
    if(i == 2*side-2){
      pattern[i] = generateLine(' ')(gaps2)+'*'+generateLine(' ')(gaps) + generateLine('*')(side);
    } else {
      pattern[i] = generateLine(' ')(gaps2)+'*'+generateLine(' ')(gaps) + generateMiddleLines('*','*')(side);
    }
    gaps--;
    gaps2++;
  }
  return pattern;
}
pattern = secondHalf(+process.argv[2])

for(let i=0; i<pattern.length; i++){
  console.log(pattern[i]);
};
