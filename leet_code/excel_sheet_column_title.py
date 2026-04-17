class Solution(object):
    def convertToTitle(self, columnNumber):
        res = ''
        while columnNumber > 0:
           columnNumber -= 1
           char = chr(columnNumber % 26 + ord('A'))
           res = char + res
           columnNumber //= 26
        return  res
    
sol = Solution()
print(sol.convertToTitle(28))

'''
Example 1:

Input: columnNumber = 1

Output: "A"

Example 2:

Input: columnNumber = 28

Output: "AB"

Example 3:

Input: columnNumber = 701

Output: "ZY"
'''


