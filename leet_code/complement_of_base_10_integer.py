class Solution(object):
    def bitwiseComplement(self, n):
       if n < 0 : 
        return 0
       mask = n
       mask |= mask >> 1
       mask |= mask >> 2
       mask |= mask >> 4
       mask |= mask >> 8
       mask |= mask >> 16

       return n ^ mask
        
        

sol = Solution()
print(sol.bitwiseComplement(5))

'''
Example 1:

Input: nums = [2,2,3,1], k = 4

Output: 2

Explanation:

The subarray [2, 3] has distinct elements {2, 3} whose sum is 2 + 3 = 5, which is ​​​​​​​at least k = 4. Thus, the answer is 2.

Example 2:

Input: nums = [3,2,3,4], k = 5

Output: 2

Explanation:

The subarray [3, 2] has distinct elements {3, 2} whose sum is 3 + 2 = 5, which is ​​​​​​​at least k = 5. Thus, the answer is 2.

Example 3:

Input: nums = [5,5,4], k = 5

Output: 1

Explanation:

The subarray [5] has distinct elements {5} whose sum is 5, which is at least k = 5. Thus, the answer is 1.

'''