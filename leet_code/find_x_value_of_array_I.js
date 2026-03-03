/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function (nums, k) {
    let n = nums.length;
    let result = Array(k).fill(0)
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product = (product * nums[j]) % k;
            result[product]++;
            if (product === 0) {
                result[0] += (n - j - 1);
                break;
            }
        }
    }
    return result;
};

let nums = [1,2,3,4,5], k = 3;
console.log(resultArray(nums, k))