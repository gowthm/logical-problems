/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let tab = []
    tab[0] = 1;
tab[1] = 1;

for (let i=2; i<=n; i++) {
    tab[i] = tab[i-1]+tab[i-2]; 
};
return tab[n];
    
}; 


// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45