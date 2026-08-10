/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
     if (nums.length == 1) {
        if (nums[0] == k) {
            return 0
        }
    }
    
    let distanctArr = []
    let greaterK = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] < k) return -1
        if (distanctArr.indexOf(nums[i]) == -1) {
            distanctArr.push(nums[i])
            if (nums[i] > k) greaterK++
        }        
    }
    return greaterK
};
let nums =  [5,2,5,4,5], k = 2
console.log(minOperations(nums, k))


// Example 1:

// Input: nums = [5,2,5,4,5], k = 2

// Output: 2

// Explanation:

// The operations can be performed in order using valid integers 4 and then 2.

// Example 2:

// Input: nums = [2,1,2], k = 2

// Output: -1

// Explanation:

// It is impossible to make all the values equal to 2.

// Example 3:

// Input: nums = [9,7,5,3], k = 1

// Output: 4

// Explanation:

// The operations can be performed using valid integers in the order 7, 5, 3, and 1.

 

// Constraints:

// 1 <= nums.length <= 100 
// 1 <= nums[i] <= 100
// 1 <= k <= 100