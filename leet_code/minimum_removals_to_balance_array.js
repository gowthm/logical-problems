/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function (nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        let c = nums[i] * k;
        if (i <= j && c < nums[j]) {
            i++;
        }
    }
    return i;
};

let nums = [1, 6, 2, 9], k = 3;
console.log(minRemoval(nums, k))

// Example 1:

// Input: nums = [2,1,5], k = 2

// Output: 1

// Explanation:

// Remove nums[2] = 5 to get nums = [2, 1].
// Now max = 2, min = 1 and max <= min * k as 2 <= 1 * 2. Thus, the answer is 1.
// Example 2:

// Input: nums = [1,6,2,9], k = 3

// Output: 2

// Explanation:

// Remove nums[0] = 1 and nums[3] = 9 to get nums = [6, 2].
// Now max = 6, min = 2 and max <= min * k as 6 <= 2 * 3. Thus, the answer is 2.
// Example 3:

// Input: nums = [4,6], k = 2

// Output: 0

// Explanation:

// Since nums is already balanced as 6 <= 4 * 2, no elements need to be removed.