/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let arr = []
    for (let i=0; i<words.length; i++) {
        let tempArr = []
        for (let j=0; j<words[i].length; j++){
            if (words[i][j+1] && words[i][j]) {
            let diff = alphaToNumber(words[i][j+1]) - alphaToNumber(words[i][j])
            tempArr.push(diff)
            }
        }
        arr.push(tempArr)
    }
    let commonStr;
    if (JSON.stringify(arr[0]) == JSON.stringify(arr[1])) {
        commonStr = JSON.stringify(arr[0])
    } else if(JSON.stringify(arr[0]) == JSON.stringify(arr[2])) {
        commonStr = JSON.stringify(arr[0])
    } else {
        commonStr = JSON.stringify(arr[1])
    }
    for (let i=0; i<arr.length; i++) {
        if (JSON.stringify(arr[i]) != commonStr) {
            return words[i]
        }
    }
};

function alphaToNumber(letter) {
  return letter.toLowerCase().charCodeAt(0) - 97;
}

let words = ["mll","edd","jii","tss","fee","dcc","nmm","abb","utt","zyy","xww","tss","wvv","xww","utt"]
console.log(oddString(words))


// Example 1:

// Input: words = ["adc","wzy","abc"]
// Output: "abc"
// Explanation: 
// - The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
// - The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
// - The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1]. 
// The odd array out is [1, 1], so we return the corresponding string, "abc".
// Example 2:

// Input: words = ["aaa","bob","ccc","ddd"]
// Output: "bob"
// Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].
 

// Constraints:

// 3 <= words.length <= 100
// n == words[i].length
// 2 <= n <= 20
// words[i] consists of lowercase English letters.