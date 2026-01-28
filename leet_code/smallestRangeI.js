/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {

    let min = Math.min(...nums)+k;
    let max = Math.max(...nums)-k;
    return Math.min(0, min-max)
    
};

let nums = [1], k = 0

console.log(smallestRangeI())