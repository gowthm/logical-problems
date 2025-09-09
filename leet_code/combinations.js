/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let arr = [];
    let combArr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    function back_tracking_algorithm(id, comb) {
        if (id == arr.length) {
            comb.length == k ? combArr.push([...comb]) : ""
            return;
        }
        comb.push(arr[id]);
        back_tracking_algorithm(id + 1, comb);
        comb.pop();
        back_tracking_algorithm(id + 1, comb);
    }
    back_tracking_algorithm(0, []);
    return combArr;

};
let n = 4;
let k = 2;
console.log(combine(n, k));

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.