/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let arr = [[1]];

    for (let i = 1; i < numRows; i++) {
        let row = Array(i + 1).fill(1);
        let previousArr = arr[i - 1];
        for (let k = 1; k < i; k++) {
            row[k] = previousArr[k - 1] + previousArr[k];
        }
        arr.push(row)
    }
    return arr;

};

console.log(generate(5));

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]