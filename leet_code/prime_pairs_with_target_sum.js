/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
    let arr = []
    for (let i=2; i<=n/2; i++){
        if (checkPrime(i)) {
            let j = n-i;
            if (checkPrime(j)) {
                arr.push([i, j])
            }
        }
        }
        
    return arr
    
};

function checkPrime(num) {
    if (num <= 1) return false
    if (num == 2) return true
    if (num%2 ==0) return false
    let boundary = Math.sqrt(num)
    for (let i=3; i<=boundary; i+=2){
        if (num % i === 0) return false
    }
    return true
}

let n = 10
console.log(findPrimePairs(n))


// Example 1:

// Input: n = 10
// Output: [[3,7],[5,5]]
// Explanation: In this example, there are two prime pairs that satisfy the criteria. 
// These pairs are [3,7] and [5,5], and we return them in the sorted order as described in the problem statement.
// Example 2:

// Input: n = 2
// Output: []
// Explanation: We can show that there is no prime number pair that gives a sum of 2, so we return an empty array. 
 