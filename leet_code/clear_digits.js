/**
 * @param {string} s
 * @return {string}
 */

var clearDigits = function(s) {
    let nums ="0123456789";
    for (let i=0; i<s.length; i++) {
        if (nums.includes(s[i])) {
            if (!nums.includes(s[i-1])) {
                s = s.slice(0, i-1) + s.slice(i+1, s.length);
                i = 0;
            }
        }
    }
    return s;
    
};

let s = "cb34";
console.log(clearDigits(s))


// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".