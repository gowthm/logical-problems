/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    let newString = []
    for (let el of s) {
        let reverse = el.split('').reverse().join('')
        newString.push(reverse)
    }
    return newString.join(' ')
    
};

console.log(reverseWords("Let's take LeetCode contest"))

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 