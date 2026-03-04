/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let count = 0;
    let row = 0;
    for (let i = 0; i < mat.length; i++) {
        let matRowCount = mat[i].reduce((count, current) => count + current, 0)
        if (count < matRowCount) {
            count = matRowCount;
            row = i;
        }
    }
    return [row, count]
};

let mat = [[0,0,0],[0,1,1]]
console.log(rowAndMaximumOnes(mat));


// Example 1:

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 
// Example 2:

// Input: mat = [[0,0,0],[0,1,1]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
// Example 3:

// Input: mat = [[0,0],[1,1],[0,0]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].
 