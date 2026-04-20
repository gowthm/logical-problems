class Solution(object):
    def numberOfWays(self, startPos, endPos, k):
        mod = 10**9 + 7
        
        d = abs(endPos - startPos)
        if d > k or (k - d) % 2 != 0:
            return 0
        
        x = (k + d) // 2
        
        return self.nCr(k, x, mod)
    
    def nCr(self, n, r, mod):
        if r > n:
            return 0
        
        num = 1
        den = 1
        
        for i in range(r):
            num = num * (n - i) % mod
            den = den * (i + 1) % mod
        
        # Fermat's Little Theorem for modular inverse
        return num * pow(den, mod - 2, mod) % mod