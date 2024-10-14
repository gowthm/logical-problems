
// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num = n;
    if (num == 1) {
        return true;
    }
       while(num > 1) {
    let s = Number(num.toString().split('').map(el => el**2).reduce((a,b) =>a+b));
    num = s;
    if (num == 4) {
        return false;
    }
   if (num == 1) {
       return true;
   }  
}
};
