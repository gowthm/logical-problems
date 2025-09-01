/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    function combinations(open, close, total) {
        if (open === close && open + close === n*2) {
            res.push(total);
            return;
        }
        if (open < n) {
            combinations(open+1, close, total+"(")
        }
        if (close < open) {
            combinations(open, close+1, total+")")
        }
        
    }
    combinations(0, 0, "");
    return res;
    
};

let n = 3;
console.log(generateParenthesis(n));

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 