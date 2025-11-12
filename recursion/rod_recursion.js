// JavaScript program to find maximum
// profit from rod of size n 

function cutRodRecur(i, price, memo) {
    
    
    // Base case
    if (i === 0) return 0;
    
    // If value is memoized
    if (memo[i - 1] !== -1) return memo[i - 1];
    
    let ans = 0;

    // Find maximum value for each cut.
    // Take value of rod of length j, and 
    // recursively find value of rod of 
    // length (i-j).
    for (let j = 1; j <= i; j++) {
        console.log("init", ans, j, memo)
        ans = Math.max(ans, price[j - 1] + cutRodRecur(i - j, price, memo));
    }

    memo[i - 1] = ans;
    return ans;
}

function cutRod(price) {
    const n = price.length;
    const memo = Array(n).fill(-1);
    return cutRodRecur(n, price, memo);
}

const price = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(cutRod(price));