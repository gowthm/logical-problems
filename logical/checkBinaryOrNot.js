let num = 100010101001;
function checkBinary(num) {
 while (num > 0) {
 let moduleV = Math.floor(num%10);
  if (moduleV !== 0 && moduleV !== 1) {
    return "Number is not binary";
  }
  num = Math.floor(num/10);
  if (num == 0) {
    return "Number is binary";
  }
} 
}
console.log(checkBinary(num))
