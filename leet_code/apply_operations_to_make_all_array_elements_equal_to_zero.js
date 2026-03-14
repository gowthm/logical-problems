/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    for (let i=0; i<nums.length; i++) {
        if(nums[i] < 0) return false;
        let val = nums[i];
        if(val > 0) {
            if(i+k > nums.length) return false;
            for (let j=i; j<i+k; j++) {
                nums[j] -= val
            }
        }
    }
    return true;
};

let nums = [2,2,3,1,1,0], k = 3;
console.log(checkArray(nums, k));

// Example 1:

// Input: nums = [2,2,3,1,1,0], k = 3
// Output: true
// Explanation: We can do the following operations:
// - Choose the subarray [2,2,3]. The resulting array will be nums = [1,1,2,1,1,0].
// - Choose the subarray [2,1,1]. The resulting array will be nums = [1,1,1,0,0,0].
// - Choose the subarray [1,1,1]. The resulting array will be nums = [0,0,0,0,0,0].


// Example 2:

// Input: nums = [1,3,1,1], k = 2
// Output: false
// Explanation: It is not possible to make all the array elements equal to 0.