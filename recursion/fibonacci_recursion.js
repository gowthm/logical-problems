function fibo(n,arr={}) {
    if(n <=1) {
        return n;
    }
    arr[n] = fibo(n-1)+fibo(n-2);
    return arr[n];
    
}

let n = 10;
console.log(fibo(n));


function fib(n, memo = {}) {
    console.log(n, memo)
  if (n in memo){
      console.log("inside", n)
      return memo[n];
      
  } 
  if (n <= 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    console.log("last", n, memo)
  return memo[n];
}
console.log(fib(10))
