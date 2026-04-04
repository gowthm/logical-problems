class Solution(object):
    def firstCompleteIndex(self, arr, mat):
      m, n = len(mat), len(mat[0])
      pos = {}
      for i in range(m):
          for j in range(n):
              pos[mat[i][j]] = (i,j)
      row_count = [0] * m
      col_count = [0] * n
      for i, num in enumerate(arr):
          r, c = pos[num]
          row_count[r] += 1
          col_count[c] += 1

          if row_count[r] == n or col_count[c] == m:
              return i
      

sol = Solution()
sol.firstCompleteIndex([1,3,4,2], [[1,4],[2,3]])
        