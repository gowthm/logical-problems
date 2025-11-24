// Kadane’s Algorithm finds the maximum sum of any continuous subarray in an array, in O(n) time.

// Start a new subarray or continue the current one — whichever gives a higher sum.

currentSum = max(nums[i], currentSum + nums[i])
maxSum = max(maxSum, currentSum)

// Why it works?

// If currentSum becomes negative, carrying it forward only reduces future sums.

// So Kadane drops negative baggage and starts fresh.

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Start new or extend previous?
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Track global maximum
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

