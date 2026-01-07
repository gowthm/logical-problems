/**
 * Linear Time Complexity: O(n)
 * 
 * Explanation:
 * - The function executes operations proportional to input size (n)
 * - Execution time grows LINEARLY with input size
 * - If input doubles, execution time also doubles
 * 
 * Time Complexity: O(n) - Linear time
 * Space Complexity: O(1) - Uses fixed amount of memory (variable i)
 * 
 * Real-world examples of O(n):
 * - Iterating through an array: for (let i = 0; i < arr.length; i++)
 * - Linear search: finding an element in unsorted array
 * - Finding min/max in an array
 * - Summing all elements in an array
 * - Printing all elements
 */

function linerTimeComplexity(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

linerTimeComplexity(10)

// If:
// 10 items → 10 steps
// 100 items → 100 steps
// 🧠 Time: O(n)


