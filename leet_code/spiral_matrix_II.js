/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0)
    }
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let num = 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            arr[top][i] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            arr[bottom][i] = num++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = num++;
        }
        left++
    }

    return arr;

};

let n = 4;
console.log(generateMatrix(n))

// Example 1:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// Example 2:
// Input: n = 1
// Output: [[1]]