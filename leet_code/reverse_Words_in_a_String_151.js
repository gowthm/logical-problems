/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    s = s.trim().split(/\s+/);
    console.log(s);
    let reverseString = [];
    for (let i = s.length - 1; i >= 0; i--) {
        reverseString.push(s[i])
    }
    reverseString = reverseString.join(' ');
    return reverseString;

};

// Time Complexity : O(N)
// Space Complexity : O(N)

// input s = "the sky is blue";
// output = "blue is sky the";

// input = "  hello world  ";
// output = "world hello";

// input = "a good   example";
// output = "example good a";