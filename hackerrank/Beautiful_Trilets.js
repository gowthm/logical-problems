let arr = [1,2,4,5,7,8,10];
let d = 3;
let t = 0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++) {
        if (arr[j]-arr[i] === d) {
            for(let g=j+1;g<arr.length;g++) {
                if(arr[g]-arr[j] === d) {
                    t = t+1;
                }
            }
        }
    }
}
console.log(t)
