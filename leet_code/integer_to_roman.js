/**
 * @param {number} num
 * @return {string}
 */
 
var intToRoman = function(num) {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    let s = (num/10)
    console.log(s)
      return ths[Math.floor(num/1000)]+hrns[Math.floor((num%1000)/100)]+
          tens[Math.floor(((num%1000)%100)/10)]+ ones[Math.floor(((num%1000)%100)%10)];
};

console.log(intToRoman(58))


// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV
 

// Constraints:

// 1 <= num <= 3999