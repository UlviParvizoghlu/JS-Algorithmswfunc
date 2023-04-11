function numPow(number, power){
    let result = 1;
    for (let i = 1; i <= power; i++) { 
      result = result * number;
    }
    return result;
  }
  console.log(numPow(11,2))