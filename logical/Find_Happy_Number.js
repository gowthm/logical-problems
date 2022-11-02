let num = 31;
let sum = 0;

// recursion for sum
while (sum != 1 && sum != 4) {
  sum = 0;
  while (num != 0) {
    let rem = num%10;
    sum = sum + (rem*rem);
    num = Math.floor(num/10);
  }
  num = sum;
}
if (sum == 1) {
  console.log("It is happy number");
} else {
  console.log("It is not happy number");
}
