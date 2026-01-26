/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
   let freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0)+1;
    }
    let r = ""
    for (let char of order) {
        r+=char.repeat(freq[char]);
        delete freq[char]
    }
    for (let char in freq) {
        console.log(char)
          r+=char.repeat(freq[char]);
    }
    return r;
};

let order = "cba", s = "aaacccbbsdddaa";
console.log(customSortString(order, s))

// Example 1:

// Input: order = "cba", s = "abcd"

// Output: "cbad"

// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

// Example 2:

// Input: order = "bcafg", s = "abcd"

// Output: "bcad"

// Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.

// Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "dbca" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.