let number = 1001;
let rem, rev=0;
let original = number;
while (number > 0) {
    rem = number%10;
    rev = rev*10+rem;
    number = parseInt(number/10);
    console.log(rem, rev, number)
}
if (original == rev) {
    console.log("It is palindrome")
} else {
    console.log("It is not palindrome")
}