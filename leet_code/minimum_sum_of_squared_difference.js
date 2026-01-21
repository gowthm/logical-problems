/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function (nums1, nums2, k1, k2) {
    let diff = [];
    let maxDiff = 0;

    for (let i = 0; i < nums1.length; i++) {
        let d = Math.abs(nums1[i] - nums2[i]);
        diff.push(d);
        maxDiff = Math.max(maxDiff, d);
    }
    let freq = new Array(maxDiff + 1).fill(0);
    for (let j = 0; j < diff.length; j++) {
        freq[diff[j]] = freq[diff[j]] + 1
    }

    let k = k1 + k2;
    for (let m = maxDiff; k > 0 && m > 0; m--) {
        if (freq[m] == 0) continue;
        const move = Math.min(freq[m], k);
        freq[m] = freq[m] - move;
        freq[m - 1] = freq[m - 1] + move;
        k = k - move;
    }

    let result = 0n;
    for (let d = 0; d <= maxDiff; d++) {
        if (freq[d]) {
            result += BigInt(freq[d]) * BigInt(d) * BigInt(d)
        }
    }

    return Number(result)
};

let nums1 = [1, 2, 3, 4], nums2 = [2, 10, 20, 19], k1 = 0, k2 = 0
console.log(minSumSquareDiff(nums1, nums2, k1, k2))


// Example 1:

// Input: nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
// Output: 579
// Explanation: The elements in nums1 and nums2 cannot be modified because k1 = 0 and k2 = 0.
// The sum of square difference will be: (1 - 2)2 + (2 - 10)2 + (3 - 20)2 + (4 - 19)2 = 579.
// Example 2:

// Input: nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
// Output: 43
// Explanation: One way to obtain the minimum sum of square difference is:
// - Increase nums1[0] once.
// - Increase nums2[2] once.
// The minimum of the sum of square difference will be:
// (2 - 5)2 + (4 - 8)2 + (10 - 7)2 + (12 - 9)2 = 43.
// Note that, there are other ways to obtain the minimum of the sum of square difference, but there is no way to obtain a sum smaller than 43.
