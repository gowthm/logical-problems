class Solution(object):
    def maxSubArray(self, nums):
       currentMax = nums[0]
       maxSum = nums[0]
       for i in range(1, len(nums)):
           currentMax = max(nums[i], currentMax+nums[i])
           maxSum = max(maxSum, currentMax)
    
       return maxSum

nums = [-2,1,-3,4,-1,2,1,-5,4]
arr = Solution()
print(arr.maxSubArray(nums))
        