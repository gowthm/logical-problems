/**
 * Constant Time Complexity: O(1)
 * 
 * Explanation:
 * - The function always executes a fixed number of operations (1 iteration)
 * - Execution time does NOT depend on input size
 * - No matter what input you provide, it runs the same number of steps
 * 
 * Time Complexity: O(1) - Constant time
 * Space Complexity: O(1) - Uses fixed amount of memory (variable i)
 * 
 * Real-world examples of O(1):
 * - Accessing array element by index: arr[5]
 * - Hash map lookup: map.get(key)
 * - Push/pop operations on a stack
 * - Arithmetic operations: a + b
 */

function constantSpaceComplexity() {
    for (let i = 0; i < 1; i++) {
        console.log(i)
    }
}

constantSpaceComplexity()

// No matter array size → 1 operation
// 🧠 Time: O(1)