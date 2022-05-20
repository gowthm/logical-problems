let s = [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436];
let k = 7;
let arr = new Array(k);
arr.fill(0);
for(let i = 0;i<s.length;i++){
    arr[s[i]%k]++;
}
console.log(arr);
if(k%2==0){
     console.log('even');
    arr[k/2] = Math.min(arr[k/2], 1);
}
 console.log(arr)
let data = Math.min(arr[0], 1);
for(let i=1;i<=k/2;i++) {
    data+= Math.max(arr[i], arr[k-i])
    // console.log('data', data);
     console.log('data1', arr[i], arr[k-i]);
}
console.log(data)
