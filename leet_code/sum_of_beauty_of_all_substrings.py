class Solution(object):
    def beautySum(self, s):
        total_beaty = 0
        n = len(s)
        for i in range(n):
            freq = [0] * 26
            for j in range(i, n):
                freq[ord(s[j]) - ord('a')]+=1
                min_freq = float('inf')
                max_freq = 0
                for f in freq:
                    if f > 0:
                        min_freq = min(min_freq, f)
                        max_freq = max(max_freq, f)
                total_beaty += (max_freq - min_freq)
        return total_beaty
                         

sol = Solution()
print(sol.beautySum('aabcbaa'))

'''
Example 1:

Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

Example 2:

Input: s = "aabcbaa"
Output: 17
'''