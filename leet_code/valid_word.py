class Solution(object):
    def isValid(self, word):
        has_vowels = False
        has_consonant = False
        if len(word) < 3:
            return False
        vowels = set('aeiouAEIOU')
        if not word.isalnum():
            return False
        for ch in word:
            if ch.isalpha():
                if ch in vowels:
                    has_vowels = True
                else:
                    has_consonant = True
        return has_vowels and has_consonant
                
        

sol = Solution()
print(sol.isValid('UuE6'))


"""
Example 1:

Input: word = "234Adas"

Output: true

Explanation:

This word satisfies the conditions.

Example 2:

Input: word = "b3"

Output: false

Explanation:

The length of this word is fewer than 3, and does not have a vowel.

Example 3:

Input: word = "a3$e"

Output: false

Explanation:

This word contains a '$' character and does not have a consonant.
"""