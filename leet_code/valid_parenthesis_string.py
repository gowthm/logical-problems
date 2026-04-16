import math
class Solution(object):
    def checkValidString(self, s):
       low = high = 0
       for i in s:
        if i == '(':
            low+=1
            high+=1
        elif i == ')':
            low-=1
            high-=1
        else:
            low-=1
            high+=1
        if high < 0:
           return False
        if low < 0:
           low = 0
       return low == 0

sol = Solution()
print(sol.checkValidString('(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'))

'''

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "(*)"
Output: true

Example 3:

Input: s = "(*))"
Output: true
'''