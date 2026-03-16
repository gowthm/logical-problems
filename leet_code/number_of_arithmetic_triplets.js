// Solution 1

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    for (let k=nums.length-1; k>=0; k--) {
        for (let j=k-1; j>=0; j--) {
            for(let i=j-1; i>=0; i--) {
                if (nums[k] - nums[j] == diff && nums[j]-nums[i] == diff) {
                count+=1
            } 
            }
        }
    }
    return count;
};

 // Solution 2

 /**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0
  let set = new Set(nums)
    for (let num of nums) {
        if(set.has(num+diff) && set.has(num+2*diff)) {
            count++
        }
    }
    return count;
    
};
let nums = [0,1,4,6,7,10], diff = 3
console.log(arithmeticTriplets(nums, diff))

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

// Example 2:

// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
 

