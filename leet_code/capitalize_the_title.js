/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    title = title.split(' ')
    let finalChar = ''
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            finalChar += title[i].charAt(0).toUpperCase() + title[i].slice(1).toLowerCase() + ' '
        } else {
            finalChar += title[i].toLowerCase() + ' '
        }
    }
    return finalChar.trim()
};

// Example 1:

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

// Example 2:

// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

// Example 3:

// Input: title = "i lOve leetcode"
// Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.