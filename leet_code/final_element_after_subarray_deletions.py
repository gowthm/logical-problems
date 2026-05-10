class Solution(object):
    def finalElement(self, nums):
        n = len(nums)
        if n == 1:
            return nums[0]
        return max(nums[0], nums[-1])
            
    
sol = Solution()
print(sol.finalElement([1,5,2]))

