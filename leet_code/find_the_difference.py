class Solution(object):
    def findTheDifference(self, s, t):
        sumT = 0
        sumS = 0
        for i in s:
            sumS += ord(i)
 
        for j in t:
            sumT += ord(j)
        return chr(sumT - sumS)
        

sol = Solution()
print(sol.findTheDifference('abcd', 'abcde'))


'''

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.

Example 2:

Input: s = "", t = "y"
Output: "y"
 
 '''