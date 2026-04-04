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

# example 1:

# Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
# Output: 2
# Explanation: The first 3 numbers in arr are 1, 3, and 4. 
# - 1 and 4 are in the first row. 
# - 2 and 3 are in the second row. 
# - 1 and 2 are in the first column. 
# - 3 and 4 are in the second column. 
# At index 2, the first column is completely painted.

# example 2:

# Input: arr = [2,5,1,6,4,3], mat = [[1,2,3],[4,5,6]]
# Output: 5
# Explanation: The first 6 numbers in arr are 2, 5, 1, 6, 4, and 3. 
# - 1, 2, and 3 are in the first row. 
# - 4, 5, and 6 are in the second row. 
# - 1 and 4 are in the first column. 
# - 2 and 5 are in the second column. 
# - 3 and 6 are in the third column. 
# At index 5, the first row and the third column are completely painted.
        