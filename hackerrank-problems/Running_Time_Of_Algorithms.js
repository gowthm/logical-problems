// let arr = [4,4,3,4];

let arr = [2,1,3,1,2]
let c = 0;

// new function
function runningTime(arr) {
    for (let i=1; i<arr.length; i++) {
        
        for (let j=0; j<i; j++) {

            if (arr[i] < arr[j]) {
                for (let k=j; k<i; k++) {
                    c = c+1;
                    let temp = arr[k];
                    arr[k] = arr[i]
                    arr[i] = temp;
               
                }
            }
            
        }
        
    }
    return c
}
console.log(runningTime(arr))
