// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let nums = [1,3,5,6];
let target = 7;
// Output: 4
function searchInsert(nums, target) {
    if (nums.indexOf(target) > -1) {
    return nums.indexOf(target)
} else {
        nums.push(target);
        let sort = nums.sort((a,b) => a-b);
       return sort.indexOf(target)
}
}
console.log(searchInsert(nums, target))
