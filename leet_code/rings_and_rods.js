/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let obj = {}
    let count = 0;
    for (let i = 1; i < rings.length; i += 2) {
        obj[rings[i]] = obj[rings[i]] ? obj[rings[i]] + rings[i - 1] : ("") + rings[i - 1]
    }
    for (let rod in obj) {
        if (obj[rod].split('').indexOf("R") != -1 && obj[rod].split('').indexOf("G") != -1 &&
            obj[rod].split('').indexOf("B") != -1) {
            count += 1
        }
    }
    return count;
};

let rings = "B0B6G0R6R0R6G9R9"
console.log(countPoints(rings))

// Example 1:

// Input: rings = "B0B6G0R6R0R6G9R9"

// Output: 1

// Explanation:

// For rod 0: There are 3 rings (B, G, R).
// For rod 6: There are 3 rings (B, R, R).
// For rod 9: There are 2 rings (G, R).
// Only rod 0 has all 3 colors.
// Example 2:

// Input: rings = "B0R0G0R9R0B9B9"

// Output: 1

// Explanation:

// For rod 0: There are 3 rings (B, R, R).
// For rod 9: There are 2 rings (G, B).
// Only rod 0 has all 3 colors.
// Example 3:

// Input: rings = "G4R2B0G6R8R4G9G8G6B8"

// Output: 0

// Explanation:

// There is no rod with all 3 colors.