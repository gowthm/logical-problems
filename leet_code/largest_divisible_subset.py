class Solution(object):
    def largestDivisibleSubset(self, nums):
        if not nums:
            return []
        nums.sort()
        n = len(nums)
        dp = [1] * n
        prev = [-1] * n
        main_index = 0
        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j]  == 0:
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j]+1
                        prev[i] = j
            if dp[i] > dp[main_index]:
                main_index = i
        result = []
        while main_index != -1:
            result.append(nums[main_index])
            main_index = prev[main_index]
        return result[::-1]
                    

sol = Solution()
print(sol.largestDivisibleSubset([1,2,3]))


"""
Example 1:

Input: nums = [1,2,3]

Output: [1,2]

Explanation: [1,2] is the largest divisible subset with length 2. Another possible answer is [1,3]

Example 2:

Input: nums = [1,2,4,8]

Output: [1,2,4,8]

Explanation: [1,2,4,8] is the largest divisible subset with length 4.

"""
