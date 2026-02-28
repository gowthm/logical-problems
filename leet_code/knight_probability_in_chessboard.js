/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    let dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[row][column] = 1;
    let directions = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [2, -1],
        [2, 1],
        [1, -2],
        [1, 2]
    ]
    for (let step = 0; step < k; step++) {
        let newdp = Array.from({ length: n }, () => Array(n).fill(0));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (dp[r][c] > 0) {
                    for (let [directR, directC] of directions) {
                        let nr = r + directR;
                        let nc = c + directC;
                        if (nr >= 0 && nc >= 0 && nr < n && nc < n) {
                            newdp[nr][nc] += dp[r][c] / 8;
                        }
                    }
                }
            }
        }
        dp = newdp;
    }
    let result = 0;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            result += dp[r][c]
        }
    }
    return result;
};

let n = 3, k = 2, row = 0, column = 0;
console.log(knightProbability(n, k, row, column))


// Example 1:

// Input: n = 3, k = 2, row = 0, column = 0
// Output: 0.06250
// Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
// From each of those positions, there are also two moves that will keep the knight on the board.
// The total probability the knight stays on the board is 0.0625.


// Example 2:

// Input: n = 1, k = 0, row = 0, column = 0
// Output: 1.00000

// At each step:

// The knight has 8 possible moves

// Some moves may go off the board

// We only count valid moves

// Each move has probability 1/8