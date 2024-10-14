/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {

    let totalCount = 0;
      const freqMap = new Map();
  
      // Recursive function to generate subsets
      function createSubset(index) {
          // Base case: If we've considered all elements
          if (index === nums.length) {
              totalCount++; // Count this subset as valid
              return;
          }
  
          // Option 1: Exclude the current element and move to the next
          createSubset(index + 1);
  
          // Option 2: Include the current element if it's safe
          const current = nums[index];
          const conflict1 = current - k;
          const conflict2 = current + k;
  
          if ((freqMap.get(conflict1) || 0) === 0 && (freqMap.get(conflict2) || 0) === 0) {
              // Mark the current element as included
              freqMap.set(current, (freqMap.get(current) || 0) + 1);
              createSubset(index + 1);
              // Backtrack: unmark the current element
              freqMap.set(current, freqMap.get(current) - 1);
          }
      }
  
      // Start generating subsets from index 0
      createSubset(0);
  
      // Subtract 1 because we don't count the empty subset
      return totalCount - 1;
      
  };

// Input nums = [20,14,22,1,4,11,21,19,29,25,12,18,9,15,23,6,27,16,26,5] k =13
// Input nums = [2,4,6] k = 2
// Input nums = [4,2,5,9,10,3] k = 1