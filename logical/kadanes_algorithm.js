// var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
// Maximum contiguous sum is 7

let nums = [5,4,-1,7,8];
let count = 0;
console.log(findMaxSubArraySum(nums))
function findMaxSubArraySum(nums) {
    for (let i=0; i<nums.length; i++){
        let tempCount = Number(nums[i]);
        for (let j=i+1; j<nums.length; j++) {
            // console.log(count, tempCount)
            tempCount+= nums[j]
            if (count < tempCount) {
                count = tempCount
            }
        }
}
return count
    
}

