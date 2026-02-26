/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum == num;
};

let num = 28;
console.log(checkPerfectNumber(num))


// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.


// Example 2:

// Input: num = 7
// Output: false