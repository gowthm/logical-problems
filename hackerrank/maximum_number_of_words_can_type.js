/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    text = text.split(" ");
    let nonBrokenLetters = text.length;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < brokenLetters.length; j++) {
            if (text[i].includes(brokenLetters[j])) {
                nonBrokenLetters = nonBrokenLetters - 1;
                j = brokenLetters.length;
            }
        }
    }
    return nonBrokenLetters;
};
let text = "hello world";
let brokenLetters = "ad";
console.log(canBeTypedWords(text, brokenLetters));

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.