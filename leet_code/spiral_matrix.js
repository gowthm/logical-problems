/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let arr = [];
    let c = matrix[0].length, r = matrix.length;
    let left = 0, right = c - 1, top = 0, bottom = r - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            arr.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            arr.push(matrix[i][right])
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                arr.push(matrix[bottom][i])
            }
            bottom--;

        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr.push(matrix[i][left]);
            }
            left++;

        }

    }
    return arr;

};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]