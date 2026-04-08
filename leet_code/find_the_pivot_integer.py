class Solution(object):
    def pivotInteger(self, n):
        for i in range(1, n+1):
            temp_i = i
            temp_count1=0
            temp_count2 = 0
            while temp_i > 0:
                temp_count1+=temp_i
                temp_i -=1
            temp_i = i
            while temp_i <= n:
                temp_count2+=temp_i
                temp_i+=1
            if temp_count1 == temp_count2:
                return i
            
        return -1

sol = Solution()
print(sol.pivotInteger(8))

"""
Example 1:
Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

Example 2:
Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.

Example 3:
Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.

"""
 