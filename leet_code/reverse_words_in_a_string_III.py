class Solution(object):
    def reverseWords(self, s):
       s = s.split(' ')
       reverseW = []
       for i in range(len(s)):
           newstring = "".join(reversed(s[i]))
           reverseW.append(newstring)
       return ' '.join(reverseW)


sol = Solution()
print(sol.reverseWords("Let's take LeetCode contest"))
        