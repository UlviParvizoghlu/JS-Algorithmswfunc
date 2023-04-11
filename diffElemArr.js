function diffElemArray(arr1, arr2) {
const result = [];
    for (let i = 0; i < arr1.length; i++) {
      let same = false; 
    

      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) { 
          same = true; 
          break; 
        }
      }
    
      if (same == false) {
        let forAddResult = arr1[i];
        result[result.length] = forAddResult;  //ve ya result.push(arr1[i])
      }
    }
    return result;
}
console.log(diffElemArray(arr1=[4, 5, 2, 6, 4, 3],arr2=[7, 4, 2, 76, 45, 65]));