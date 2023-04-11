function diffOddEven (arr){
    let sumOdd=0;
    let sumEven=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2==0){
            sumOdd+=arr[i];
        }
        else if(arr[i] %2!=0){
            sumEven+=arr[i];
        }
    }
    return sumOdd-sumEven;
}
console.log(diffOddEven(arr =[22 , 33 , 11 , 66 , 10]));