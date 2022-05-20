let n = 63;
let a = 26;
let b = 35;

// let n = 63;
// let a = 97;
// let b = 39;
let arr = [];
let arr1 = []
for (let i=0;i<n;i++) {
    arr.push(i*a+(n-i-1)*b)
}
arr1 = arr.filter(function(el, p) {
    return arr.indexOf(el) == p;
})
if (a>b) {
    console.log(arr1)
} else {
    console.log(arr1.reverse())
}

