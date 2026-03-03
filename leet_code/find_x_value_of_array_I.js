/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
    let n = nums.length;
    let result = Array(k).fill(0)
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product = (product * nums[j]) % k;
            result[product]++;
            if (product === 0) {
                result[0] += (n - j - 1);
                break;
            }
        }
    }
    return result;
};

let nums = [1, 2, 3, 4, 5], k = 3;
console.log(resultArray(nums, k))

// Example 1:

// Input: nums = [1,2,3,4,5], k = 3

// Output: [9,2,4]

// Explanation:

// For x = 0, the possible operations include all possible ways to remove non-overlapping prefix/suffix that do not remove nums[2] == 3.
// For x = 1, the possible operations are:
// Remove the empty prefix and the suffix [2, 3, 4, 5]. nums becomes [1].
// Remove the prefix [1, 2, 3] and the suffix [5]. nums becomes [4].
// For x = 2, the possible operations are:
// Remove the empty prefix and the suffix [3, 4, 5]. nums becomes [1, 2].
// Remove the prefix [1] and the suffix [3, 4, 5]. nums becomes [2].
// Remove the prefix [1, 2, 3] and the empty suffix. nums becomes [4, 5].
// Remove the prefix [1, 2, 3, 4] and the empty suffix. nums becomes [5].
// Example 2:

// Input: nums = [1,2,4,8,16,32], k = 4

// Output: [18,1,2,0]

// Explanation:

// For x = 0, the only operations that do not result in x = 0 are:
// Remove the empty prefix and the suffix [4, 8, 16, 32]. nums becomes [1, 2].
// Remove the empty prefix and the suffix [2, 4, 8, 16, 32]. nums becomes [1].
// Remove the prefix [1] and the suffix [4, 8, 16, 32]. nums becomes [2].
// For x = 1, the only possible operation is:
// Remove the empty prefix and the suffix [2, 4, 8, 16, 32]. nums becomes [1].
// For x = 2, the possible operations are:
// Remove the empty prefix and the suffix [4, 8, 16, 32]. nums becomes [1, 2].
// Remove the prefix [1] and the suffix [4, 8, 16, 32]. nums becomes [2].
// For x = 3, there is no possible way to perform the operation.
// Example 3:

// Input: nums = [1,1,2,1,1], k = 2

// Output: [9,6]