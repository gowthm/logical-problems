/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let arr = [];
    function back_tracking(id, comb, total) {

        if (target == total) {
            arr.push([...comb])
            return;
        }
        if (total > target || id >= candidates.length) {
            return;
        }

        comb.push(candidates[id]);
        back_tracking(id, comb, total + candidates[id]);
        comb.pop();
        back_tracking(id + 1, comb, total);

    }
    back_tracking(0, [], 0);
    return arr;

};
let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));



// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
