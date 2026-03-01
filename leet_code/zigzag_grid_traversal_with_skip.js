/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (grid) {

    let arr = []
    let gridLength = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < gridLength * n; i += 2) {
        let r = Math.floor(i / n);
        let rem = i % n;
        let c = r & 1 ? n - rem - 1 : rem
        arr.push(grid[r][c])

    }
    return arr

};


let grid = [[1,2,3],[4,5,6],[7,8,9]];
console.log(zigzagTraversal(grid))


// Input: grid = [[1,2],[3,4]]

// Output: [1,4]


// Input: grid = [[2,1],[2,1],[2,1]]

// Output: [2,1,2]

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [1,3,5,7,9]