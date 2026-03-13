/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
    let res = 0;
    let prev = -1;
    for (let i = 0; i < forts.length; i++) {
        if (forts[i] !== 0) {
            if (prev !== -1 && forts[i] !== forts[prev]) {
                res = Math.max(res, i - prev - 1)
            }
            prev = i
        }
    }
    return res

};


// Example 1:

// Input: forts = [1,0,0,-1,0,0,0,0,1]
// Output: 4
// Explanation:
// - Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
// - Moving the army from position 8 to position 3 captures 4 enemy forts.
// Since 4 is the maximum number of enemy forts that can be captured, we return 4.


// Example 2:

// Input: forts = [0,0,1,-1]
// Output: 0
// Explanation: Since no enemy fort can be captured, 0 is returned.