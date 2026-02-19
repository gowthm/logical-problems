/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {

    let obj = {};
    for (let e of nums) {
        if (e % 2 == 0)
            obj[e] = (obj[e] || 0) + 1;
    }
    let large = 0;
    let number = -1;
    for (let m in obj) {
        if (large < obj[m]) {
            large = obj[m];
            number = Number(m);
        }

    }
    return number
};

// let  nums = [0,1,2,2,4,4,1];
// console.log(mostFrequentEven(nums))

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.