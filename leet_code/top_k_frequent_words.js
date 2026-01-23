/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let obj = {}
    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]]) {
            obj[words[i]]++
        } else {
            obj[words[i]] = 1
        }
    }
    let arr = Object.entries(obj);
    let result = []
    arr.sort((a, b) => {
        let valueA = a[1];
        let valueB = b[1];
        let keyA = a[0];
        let keyB = b[0];
        if (valueB > valueA) {
            return 1;
        } else if (valueB < valueA) {
            return -1;
        } else {
            return keyA.localeCompare(keyB)
        }
    })
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }
    return result;
};

let words = ["i", "love", "leetcode", "i", "love", "coding"], k = 3;
console.log(topKFrequent(words, k))


// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 