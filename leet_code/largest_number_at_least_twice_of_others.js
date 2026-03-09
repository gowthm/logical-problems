/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let maxNum = Math.max(...nums);
    for (let i of nums) {
        if (i != maxNum) {
            if (i / maxNum > 0.5) {
                return -1;
            }
        }
    }
    return nums.indexOf(maxNum)
};

let nums = [0,0,0,1]
console.log(dominantIndex(nums));

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.


// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.