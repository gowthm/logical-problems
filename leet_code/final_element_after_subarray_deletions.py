class Solution(object):
    def finalElement(self, nums):
        n = len(nums)
        if n == 1:
            return nums[0]
        return max(nums[0], nums[-1])

'''

Example 1:

Input: nums = [1,5,2]

Output: 2

Explanation:

One valid optimal strategy:

Alice removes [1], array becomes [5, 2].
Bob removes [5], array becomes [2]​​​​​​​. Thus, the answer is 2.

Example 2:

Input: nums = [3,7]

Output: 7

Explanation:

Alice removes [3], leaving the array [7]. Since Bob cannot play a turn now, the answer is 7.

'''
            
    
sol = Solution()
print(sol.finalElement([1,5,2]))

