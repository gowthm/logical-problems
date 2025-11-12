
var coinChange = function(coins, amount) {
    console.log(coins, amount)
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    
    let minCount = Infinity;
    
    for (const coin of coins) {
        const res = coinChange(coins, amount - coin);
        if (res !== -1) {
            minCount = Math.min(minCount, 1 + res);
        }
    }
    
    return minCount === Infinity ? -1 : minCount;
};
console.log(coinChange([1, 2, 5], 11)); // Works but very slow