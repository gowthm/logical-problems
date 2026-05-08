class Solution(object):
    def halvesAreAlike(self, s):
        ac = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        j = len(s) // 2
        a = 0
        b = 0
        for i in range(len(s)//2):
            if s[i] in ac:
                a+=1
            if s[j] in ac:
                b+=1
            j+=1
        return a == b


sol = Solution()
print(sol.halvesAreAlike("textbook"))


'''
Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.

'''