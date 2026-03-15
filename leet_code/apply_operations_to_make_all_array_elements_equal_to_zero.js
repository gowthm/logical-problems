

// Solutions 1

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

// Solutions 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    let n = nums.length;
    let diff = new Array(n).fill(0);
    let curr = 0;
    for(let i=0; i<n; i++) {
        curr = curr + diff[i];
        let val = nums[i]+curr;
        if (val < 0) return false;
        if(val > 0) {
            if(i+k > n) return false;
            curr = curr - val
            if(i+k < n) diff[i+k] += val;
        }
    }
    return true;  
};


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