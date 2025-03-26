/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let total = '';
    digits.map((el, l) => {
        if (digits.length - 1 == l) {
            if (9 > el) {
                el += 1;

            } else {
                if (total[total.length - 1]) {
                    let s = Number(total[total.length - 1]) + 1;
                    console.log('s', s)
                    total = total.substring(0, total.length - 1);
                    total += s;
                    total += '0'
                    console.log('t', total)
                    return;
                } else {
                    console.log('el', el)
                    el += 1;
                }

            }

        }

        total += el;

    });
    console.log(total)
    // total = Number(total)+1;
    total = String(total).split('').map(Number);
    // console.log(total)
    return total;

};
// let d = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// let d = [9,9]
// let d = [9,9,9]
let d = [9]
console.log(plusOne(d));

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].