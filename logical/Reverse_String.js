let str = "pacewisdom";
str = str.split("");
let temp = "";

function reverseStr(str) {
    console.log(str)
   for (let i=str.length-1; i>=0; i--) {
    temp = temp+str[i];
}
 return temp;
}
 console.log(reverseStr(str));
