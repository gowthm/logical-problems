class Solution(object):
    def mergeSimilarItems(self, items1, items2):
        obj = {}
        for val, weight in items1+items2:
            obj[val] = obj.get(val, 0)+weight
        ret = []
        for v,w in obj.items():
            ret.append([v,w])
        ret.sort()
        return ret
            
                
        

sol = Solution()
print(sol.mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]]))