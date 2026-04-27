class Solution(object):
    def checkOnesSegment(self, s):
       index = 0
       for i in range(len(s)):
           if s[i] == '1':
               if i - index > 1:
                   return False
               index = i
       return True

sol = Solution()
print(sol.checkOnesSegment('110001'))