/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    s = s.split("")
    let vowelChar = "aeiouAEIOU";
    let i = 0;
    let j = s.length - 1;
    while (j > i) {
        if (!vowelChar.includes(s[j])) j--;
        if (!vowelChar.includes(s[i])) i++;

        if (vowelChar.includes(s[j]) && vowelChar.includes(s[i])) {

            let t = s[i];
            s[i] = s[j];
            s[j] = t;
            i++;
            j--;
        }
    }
    return s.join("");

};


// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"