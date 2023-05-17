let arr = [1, 4, 20, 3, 10, 5]
let sum = 33 
//Output: Sum found between indexes 2 and 4

// Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
// Output: Sum found between indexes 1 and 4
// Explanation: Sum of elements between indices 1 and 4 is 4 + 0 + 0 + 3 = 7

// Input: arr[] = {1, 4}, sum = 0
// Output: No subarray found
// Explanation: There is no subarray with 0 sum

console.log(findSubArray(sum))
function findSubArray(sum) {
   let count = 0;
   let j=0;
   for  (let j=0; j< arr.length; j++) {
       count = arr[j]
       for (let i=j+1; i<arr.length; i++) {
    count+=arr[i];
    console.log(count)
    if (count == sum) {
        return [j,i]
    }
}
   }
 
}


