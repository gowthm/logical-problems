let n = 6 ;
let c = [0,1,2,3,4,5];
let m = n/c.length;
let arr = [];
for (let i = 0 ; i< n ;i++) {
    for (let j = 0; j< c.length;j++) {
        if (c[j] == i) {
            arr.push(0);
            break;
            
        } else {
            let closest = c.reduce(function(prev, curr) {
  return (Math.abs(curr - i) < Math.abs(prev - i) ? curr : prev);
});
arr.push(Math.abs(closest-i));
break;

        }
    }
    
}
console.log(arr)
