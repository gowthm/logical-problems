class Solution(object):
    def advantageCount(self, nums1, nums2):
       nums1.sort()
       indexed_nums2 = sorted(
            [(num, i) for i, num in enumerate(nums2)]
        )
       print(indexed_nums2, nums1)
       result = [0] * len(nums1)
       left = 0
       right = len(nums1)-1
       print(result, left, right)
       for num, index in reversed(indexed_nums2):
           if nums1[right] > num:
               result[index] = nums1[right]
               right-=1
           else:
               result[index] = nums1[left]
               left+=1
               
       return result
        

sol = Solution()
print(sol.advantageCount([2,7,11,15], [1,10,4,11]))

"""
Example 1:

Input: nums1 = [2,7,11,15], nums2 = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: nums1 = [12,24,8,32], nums2 = [13,25,32,11]
Output: [24,32,8,12]
"""