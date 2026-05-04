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