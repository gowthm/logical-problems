/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {

    let minLength = Math.min(s1.length, s2.length, s3.length);
    let total = s1.length + s2.length + s3.length;

    if (s1[0] != s2[0] || s2[0] != s3[0] || s3[0] != s1[0]) {
        return -1;
    }
    for (let i = 0; i < minLength; i++) {
        if (s1[i] == s2[i] && s2[i] == s3[i] && s3[i] == s1[i]) {
            total -= 3;
        } else {
            break;
        }

    }
    return total;
};

let s1 = "bcbb", s2 = "bccbabb", s3 = "bcabb";
console.log(findMinimumOperations(s1, s2, s3))

// Example 1:

// Input: s1 = "abc", s2 = "abb", s3 = "ab"

// Output: 2

// Explanation: Deleting the rightmost character from both s1 and s2 will result in three equal strings.

// Example 2:

// Input: s1 = "dac", s2 = "bac", s3 = "cac"

// Output: -1

// Explanation: Since the first letters of s1 and s2 differ, they cannot be made equal.