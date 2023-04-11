function reverseArray(arr){
    for (let i = 0; i < arr.length / 2; i++) {
        let k = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = k;
      }
    
      return arr;
}
console.log (reverseArray(arr =[10, 45, 32, 48, 72]))