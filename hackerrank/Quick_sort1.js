let arr =[0, -3,6, 4, -10, 8, -5, 2, -7];
console.log(arr)
let pivot = arr[0];
 let current = 0;
for (let i=0; i<arr.length; i++) {
    if (pivot > arr[i] && i != 0) {
        let temp = arr[i];
        arr.splice(i, 1);
        arr.splice(current, 0, temp)
        current = current + 1;
    }
}
console.log(arr)