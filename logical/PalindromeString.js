let word = "asxcxsa";
let lengthOfWord = word.length-1;
let startPosition = 0;
function checkPalindrome() {
   while (lengthOfWord > startPosition) {
    if (word[lengthOfWord] != word[startPosition]) {
        return "It is not palindrome"
    }
    lengthOfWord--;
    startPosition++;
}
return "It is palindrome"
}

console.log(checkPalindrome(word))
