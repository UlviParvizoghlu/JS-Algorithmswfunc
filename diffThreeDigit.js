function diffThreeDigits (arr){
    let sumThreeDigits = 0;
    let sumOther = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i]>=100 && arr[i]<=999)
        {
            sumThreeDigits+=arr[i];
        }
        else
        {
            sumOther+=arr[i];
        }
    }
    return sumThreeDigits-sumOther;
}
console.log(diffThreeDigits(arr = [321 , 123 , 11 , 12 , 13]));