let r = "hackerrank".split('');
let s = "hhhackkerbanker";
let s1 = s.split('')
let lastIndex;
let result = "YES";
let r1;
// console.log(s1);
for (let i=0; i<r.length; i++) {
   let d = s1.filter((a, index) => {
       if (a == r[i]) {
           if (!i==0 && lastIndex > index) {
               return false;
           }
           lastIndex = index;
            return true
       } else {
           return false;
       }
   })
   console.log(d, lastIndex)
   
   if (i == 5) {
       
       
       
   }
   
//   if (!d) {
//       result = "NO";
//   }
}
console.log(result)