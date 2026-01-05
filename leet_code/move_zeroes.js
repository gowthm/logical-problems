/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] != 0) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
    }
    return nums
};

let nums = [1, 0, 1];
console.log(moveZeroes(nums))


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 