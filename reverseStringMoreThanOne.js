let string = "programming";
let reverseString = []
for (let i=string.length-1; i>=0; i--) {
    let count = string.split(string[i]).length-1;
    if (count == 1) {
      reverseString.push(string[i])
    }
 }
console.log(reverseString.join(''))
