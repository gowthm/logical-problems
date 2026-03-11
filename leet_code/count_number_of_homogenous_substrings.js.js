/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
    let count = 1;
    let result = 0;
    const MOD = 1000000007
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            count++;
        } else {
            result += (count * (count + 1) / 2) % MOD
            count = 1
        }
    }
    result += (count * (count + 1) / 2) % MOD
    return result;
};



// Example 1:

// Input: s = "abbcccaa"
// Output: 13
// Explanation: The homogenous substrings are listed as below:
// "a"   appears 3 times.
// "aa"  appears 1 time.
// "b"   appears 2 times.
// "bb"  appears 1 time.
// "c"   appears 3 times.
// "cc"  appears 2 times.
// "ccc" appears 1 time.
// 3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.


// Example 2:

// Input: s = "xy"
// Output: 2
// Explanation: The homogenous substrings are "x" and "y".
// Example 3:

// Input: s = "zzzzz"
// Output: 15
 