class Solution(object):
    def kLengthApart(self, nums, k):
        prev = -1
        for i in range(len(nums)):
            if nums[i] == 1:
                if prev != -1 and i - prev - 1 < k:
                    return False 
                prev = i
        return True
                

sol = Solution()
print(sol.kLengthApart([1,0,0,1,0,1], k = 2))


'''
Example 1

Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

Example 2

Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.

'''