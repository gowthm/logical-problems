class Solution(object):
    def summaryRanges(self, nums):
       i = 0
       arr = []
       while i < len(nums):
           start = nums[i]
           while i+1 < len(nums) and nums[i+1] == nums[i]+1:
               i += 1
           end = nums[i]
           print(start, end)
           if start == end:
               arr.append(f"{start}")
           else:
               arr.append(f"{start}->{end}")
           i += 1
       return arr
           

sol = Solution()
print(sol.summaryRanges([0,1,2,4,5,7]))

'''

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

'''