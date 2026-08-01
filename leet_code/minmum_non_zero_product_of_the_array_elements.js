/**
 * @param {number} p
 * @return {number}
 */
const MOD = 1000000007n;
var minNonZeroProduct = function(p) {
    let max = (1n << BigInt(p)) - 1n
    let second = max - 1n
    let exponent = (1n << BigInt(p-1)) -1n
    console.log(exponent)
    return  Number(max * modPow(second, exponent) % MOD)
};

var modPow = function(base, exp) {
    let result = 1n
    base%=MOD
    while (exp > 0n) {
        if (exp & 1n) {
            result =  (result * base) % MOD
        }
        base = (base * base) % MOD
        exp >>= 1n
    }
    return result
}
let p = 3
console.log(minNonZeroProduct(p))

// Example 1:

// Input: p = 1
// Output: 1
// Explanation: nums = [1].
// There is only one element, so the product equals that element.
// Example 2:

// Input: p = 2
// Output: 6
// Explanation: nums = [01, 10, 11].
// Any swap would either make the product 0 or stay the same.
// Thus, the array product of 1 * 2 * 3 = 6 is already minimized.
// Example 3:

// Input: p = 3
// Output: 1512
// Explanation: nums = [001, 010, 011, 100, 101, 110, 111]
// - In the first operation we can swap the leftmost bit of the second and fifth elements.
//     - The resulting array is [001, 110, 011, 100, 001, 110, 111].
// - In the second operation we can swap the middle bit of the third and fourth elements.
//     - The resulting array is [001, 110, 001, 110, 001, 110, 111].
// The array product is 1 * 6 * 1 * 6 * 1 * 6 * 7 = 1512, which is the minimum possible product.
 

// Constraints:

// 1 <= p <= 60