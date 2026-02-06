/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            result[i] = 0;
        } else {
            let n = (i + nums[i]) % nums.length;
            if (n < 0) {
                n += nums.length
            }
            result[i] = nums[n]
        }

    }
    return result;

};

let nums = [3,-2,1,1]
console.log(maxRemoval(nums))



// Example 1:

// Input: nums = [3,-2,1,1]

// Output: [1,1,1,3]

// Explanation:

// For nums[0] that is equal to 3, If we move 3 steps to right, we reach nums[3]. So result[0] should be 1.
// For nums[1] that is equal to -2, If we move 2 steps to left, we reach nums[3]. So result[1] should be 1.
// For nums[2] that is equal to 1, If we move 1 step to right, we reach nums[3]. So result[2] should be 1.
// For nums[3] that is equal to 1, If we move 1 step to right, we reach nums[0]. So result[3] should be 3.
// Example 2:

// Input: nums = [-1,4,-1]

// Output: [-1,-1,4]

// Explanation:

// For nums[0] that is equal to -1, If we move 1 step to left, we reach nums[2]. So result[0] should be -1.
// For nums[1] that is equal to 4, If we move 4 steps to right, we reach nums[2]. So result[1] should be -1.
// For nums[2] that is equal to -1, If we move 1 step to left, we reach nums[1]. So result[2] should be 4.
 

// Constraints:

// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100