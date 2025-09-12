
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    let arr = [[1]];

    for (let i = 1; i < rowIndex + 1; i++) {
        let row = Array(i + 1).fill(1);
        let previousArr = arr[i - 1];
        for (let k = 1; k < i; k++) {
            row[k] = previousArr[k - 1] + previousArr[k];
        }
        arr.push(row)
    }
    return arr[rowIndex];

};

console.log(getRow(3));

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]