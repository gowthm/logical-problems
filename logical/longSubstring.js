function longSubstring(s) {
   let vData = {};
   let count = 0;
   let result = 0;
   for(let i = 0; i < s.length; i++) {
     console.log(i, vData[s[i]], 'visit', count, result, vData)
       if(vData[s[i]]) {
           i = vData[s[i]];
           vData = {};
           count = 0;
       }
       vData[s[i]] = i+1;
       count++;
       if (count>result) result = count;
   };
   return result;
}
// let s = 'ddddd';
 // let s = "abcabcbb"
 let s = "pwwkew";
console.log(longSubstring(s))