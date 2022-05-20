// element.n > n/2
// [2,2,1,1,,1,2,2]
// space complexity O(1)
// time complexity O(n)
  let preValue = 0;
   let h = 0;
let a = [2,2,1,1,1,2,2];
let arr = [];
for(let i=0;i<a.length;i++) {
   
    if (arr.indexOf(a[i]) == -1) {
         arr.push(a[i]);
         let count = 0;
         let j = 0;
       
        
        //  console.log(preValue)
        for(let j=0;j<a.length;j++) {
            if (a[j]==a[i]) {
                count++;
            }
        }
        if (preValue<count) {
            preValue = count;
            h = a[i]
        }
       

    }
 
}
console.log(h)

