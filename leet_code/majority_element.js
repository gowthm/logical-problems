/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let s = [];
  let high = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (s[nums[i]] != undefined) {
      s[nums[i]] = s[nums[i]] + 1;
    } else {
      s[nums[i]] = 1;
    }
    if (high < s[nums[i]]) {
      high = s[nums[i]];
      index = nums[i];
    }
  }
  return index;
};


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 