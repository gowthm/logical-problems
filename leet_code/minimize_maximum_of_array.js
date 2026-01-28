/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
    let prefix = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        let avg = Math.ceil(prefix / (i + 1));
        max = Math.max(max, avg);
    }
    return max;
};

let nums = [3,7,1,6];
console.log(minimizeArrayValue(nums))


// Example 1:

// Input: nums = [3,7,1,6]
// Output: 5
// Explanation:
// One set of optimal operations is as follows:
// 1. Choose i = 1, and nums becomes [4,6,1,6].
// 2. Choose i = 3, and nums becomes [4,6,2,5].
// 3. Choose i = 1, and nums becomes [5,5,2,5].
// The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
// Therefore, we return 5.
// Example 2:

// Input: nums = [10,1]
// Output: 10
// Explanation:
// It is optimal to leave nums as is, and since 10 is the maximum value, we return 10.
 