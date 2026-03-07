/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let count = 0;
    for (let i = 0; i < rows - 2; i++) {
        for (let j = 0; j < columns - 2; j++) {

            if (isValidMagicNumber(i, j)) {
                count++;
            }
        }
    }
    function isValidMagicNumber(i, j) {
        let checkUniqueNum = new Set();
        let sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
        for (let k = i; k < i + 3; k++) {

            let rowCounts = 0;
            for (let l = j; l < j + 3; l++) {
                rowCounts += grid[k][l];
                checkUniqueNum.add(grid[k][l])

                // Validate 1 to 9 numbers only
                if (grid[k][l] < 1 || grid[k][l] > 9) return false;
            }

            // Check count row based
            if (rowCounts != sum) {
                return false;
            }
        }

        // 1 to 9 check unique number
        if (checkUniqueNum.size != 9) {
            return false;
        }
        // Check count diagonal right to left
        if (grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] != sum) {
            return false;
        }
        // Check count diagonal left to right
        if (grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] != sum) {
            return false;
        }

        // Check row by implements
        for (let n = 0; n < 3; n++) {
            if (grid[i][j + n] + grid[i + 1][j + n] + grid[i + 2][j + n] != sum) {
                return false;
            }
        }
        return true;
    }
    return count;

};

let grid = [[10, 3, 5], [1, 6, 11], [7, 9, 2]]
console.log(numMagicSquaresInside(grid));


// Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
// Output: 1

// Input: grid = [[8]]
// Output: 0