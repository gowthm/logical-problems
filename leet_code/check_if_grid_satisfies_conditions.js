/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    if (grid.length <= 1 && grid[0].length == 1) {
        return true
    }

    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[i].length; k++) {
            if (grid.length > 1) {
                if (grid[i + 1][k] != grid[i][k]) {
                    return false;
                }
            }
            if (grid[i][k] == grid[i][k + 1]) {
                return false;
            }
        }
        return true
    }

};

// Input: grid = [[1,1,1],[0,0,0]]

// Output: false

// Input: grid = [[1,0,2],[1,0,2]]

// Output: true

// Input: grid = [[1],[2],[3]]

// Output: false

// Input: grid = [[0,4,1,7,5,4,1,4,0,7]]

// Output: true