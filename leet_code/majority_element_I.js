/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let candidate1 = null;
    let candidate2 = null;
    let count1 = 0;
    let count2 = 0;
    for (let num of nums) {
        if (num == candidate1) {
            count1++;
        } else if (num == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = num;
            count1++;
        } else if (count2 == 0) {
            candidate2 = num
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = count2 = 0;
    for (let num of nums) {
        if (num == candidate1) count1++;
        if (num == candidate2) count2++;
    }
    let m = [];
    let n = nums.length;
    if (count1 > Math.floor(n / 3)) m.push(candidate1)
    if (count2 > Math.floor(n / 3)) m.push(candidate2)
    return m;
};


let nums = [1, 2, 3, 1, 2, 1, 1];

console.log(majorityElement(nums));


// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]