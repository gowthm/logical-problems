class Solution(object):
    def countBits(self, n):
        finalArr = []
        for i in range(0, n+1):
            num = bin(i)[2:]
            total = 0
            for digits in num:
                total += int(digits)
            finalArr.append(total)
        return finalArr
            
          
sol = Solution()
print(sol.countBits(5))