/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let l = 0, r = 0, d = 0, u = 0;
    for (let move of moves) {
        if (move == 'L') {
            l++;
        } else if (move == 'R') {
            r++;
        } else if (move == 'U') {
            u++;
        } else if (move == 'D') {
            d++;
        }
    }
    return l == r && u == d;

};
let moves = "UD";
console.log(judgeCircle(moves))

// Example 1:

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.