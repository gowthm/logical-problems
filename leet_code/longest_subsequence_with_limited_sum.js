/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {

    nums.sort((a, b) => a - b);
    let result = [];
    for (let query of queries) {
        let count = 0, total = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] + total <= query) {
                count++;
                total += nums[j];
            }
        }
        result.push(count)
    }
    return result;

};

let nums = [4, 5, 2, 1], queries = [3, 10, 21];
console.log(answerQueries(nums, queries));