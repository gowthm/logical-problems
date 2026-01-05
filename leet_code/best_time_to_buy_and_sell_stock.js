/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let sell = prices[i];
        if (buy < sell) {
            profit = Math.max(profit, sell - buy)
        } else {
            buy = sell
        }
    }
    return profit

};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices))

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.