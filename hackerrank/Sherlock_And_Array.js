//Algorithm
// 2x = sumOfArray-y
// x ==> sum of data before Y

let arr = [1, 2, 4, 3];
let sumArr = 0;
for (let i=0; i<arr.length; i++) {
    sumArr+=arr[i];
}
for (let y=0; y<arr.length; y++) {
    let sumOfX = 0;
    for (let x=0; x<y; x++) {
      
        sumOfX+=arr[x]
    }
    if (2*sumOfX == sumArr-arr[y]) {
        return "YES"
    }
}
return "NO"
