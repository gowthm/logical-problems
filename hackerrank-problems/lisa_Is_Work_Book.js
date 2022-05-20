// let n = 5;
// let k = 3;
// let arr = [4,2,6,1,10];
let n = 10;
let k = 5;
let arr = [3,8,15,11,14,1,9,2,24,31];
let specialProblem = 0;
let page = 1;
for (let i = 0; i<n;i++) {
    let tempData = 1;
    let count = 0;
    for(let j = 1;j<=arr[i];j++) {
        console.log(tempData)
       if (tempData === k){
          // page++;
       }
       if (count === k) {
           count = 0;
           page++;
       }
         if (page === tempData) {
            specialProblem++;
        }
        count++;
       tempData++;
    }
    console.log('page', page);
    page++;
}
console.log(page);
console.log(specialProblem);
