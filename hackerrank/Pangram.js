// let s = "We promptly judged antique ivory buckles for the next prize";
let s = "We promptly judged antique ivory buckles for the prize";
function testPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i=0; i<alphabet.length; i++) {
    if (s.indexOf(alphabet[i].toLowerCase()) == -1) {
         if (s.indexOf(alphabet[i].toUpperCase()) == -1) {
            return "not pangram"
         }
        
    }
}
return "pangram";
}

console.log(testPangram(s))

