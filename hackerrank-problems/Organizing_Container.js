let container = [[1,3,1],[2,1,2],[3,3,3]];
let n = container.length;
console.log(n);
let cCount = new Array(n).fill(0);
let bType = new Array(n).fill(0);
for(let i=0;i<n;i++){
    let tempC = container[i];
    for(let j=0;j<n;j++) {
        const ballC = tempC[j];
        bType[j] +=  ballC;
        cCount[i] +=  ballC; 
        
    }
}
 for(let j =0;j<n;j++) {
     if (cCount[j] !== bType[j]) {
         return 'Impossilble';
     }
 }
 return 'Possible'
console.log(cCount);
console.log(bType);
