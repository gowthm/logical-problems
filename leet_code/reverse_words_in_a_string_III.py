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


"""
Example 1:

Input: s = "Let's take LeetCode contest"

Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"

Output: "rM gniD"
"""
