/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    let sum = 0;
    const mq = new MaxPriorityQueue();
    for (let e of nums) {
        mq.enqueue(e)
    }
    for (let i = 0; i < k; i++) {
        let maxNumber = mq.dequeue()
        sum += maxNumber;
        mq.enqueue(Math.ceil(maxNumber / 3))
    }
    return sum;
};

let nums = [1,10,3,3,3], k = 3;
console.log(maxKelements(nums, k))

// Example 1:

// Input: nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
// Example 2:

// Input: nums = [1,10,3,3,3], k = 3
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,2,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.
 