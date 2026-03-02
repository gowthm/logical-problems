/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canMakeEqual = function (nums, k) {

    const checkOperations = (target) => {
        let operations = 0;
        let arr = [...nums]
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] == target) {
                arr[i] *= -1;
                arr[i + 1] *= -1;
                operations++;
            }
        }
        return operations <= k && arr[arr.length - 1] != target;

    }
    return checkOperations(-1) || checkOperations(1)

};

let nums=[-1,-1,-1,1,1,1], k = 5
console.log(canMakeEqual(nums, k))


// Example 1:

// Input: nums = [1,-1,1,-1,1], k = 3

// Output: true

// Explanation:

// We can make all elements in the array equal in 2 operations as follows:

// Choose index i = 1, and multiply both nums[1] and nums[2] by -1. Now nums = [1,1,-1,-1,1].
// Choose index i = 2, and multiply both nums[2] and nums[3] by -1. Now nums = [1,1,1,1,1].
// Example 2:

// Input: nums = [-1,-1,-1,1,1,1], k = 5

// Output: false

// Explanation:

// It is not possible to make all array elements equal in at most 5 operations.