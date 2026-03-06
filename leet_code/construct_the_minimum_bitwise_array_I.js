/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let value = -1;
        for (let j = 0; j < nums[i]; j++) {
            if ((j | (j + 1)) === nums[i]) {
                value = j;
                break
            }
        }
        arr.push(value)
    }
    return arr;
};
let nums = [2, 3, 5, 7]
console.log(minBitwiseArray(nums))


// Example 1:

// Input: nums = [2,3,5,7]

// Output: [-1,1,4,3]

// Explanation:

// For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
// For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
// For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
// For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.
// Example 2:

// Input: nums = [11,13,31]

// Output: [9,12,15]

// Explanation:

// For i = 0, the smallest ans[0] that satisfies ans[0] OR (ans[0] + 1) = 11 is 9, because 9 OR (9 + 1) = 11.
// For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 13 is 12, because 12 OR (12 + 1) = 13.
// For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 31 is 15, because 15 OR (15 + 1) = 31.