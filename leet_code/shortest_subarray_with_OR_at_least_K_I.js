/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let count = nums[i];
        for (let j = i; j < nums.length; j++) {
            count |= nums[j];
            if (count >= k) {
                min = Math.min(min, j - i + 1)
            }
        }
    }
    return min == Infinity ? -1 : min;
};

let nums=[2,1,8], k = 10
console.log(minimumSubarrayLength(nums, k))


// Example 1:

// Input: nums = [1,2,3], k = 2

// Output: 1

// Explanation:

// The subarray [3] has OR value of 3. Hence, we return 1.

// Note that [2] is also a special subarray.

// Example 2:

// Input: nums = [2,1,8], k = 10

// Output: 3

// Explanation:

// The subarray [2,1,8] has OR value of 11. Hence, we return 3.

// Example 3:

// Input: nums = [1,2], k = 0

// Output: 1

// Explanation:

// The subarray [1] has OR value of 1. Hence, we return 1.