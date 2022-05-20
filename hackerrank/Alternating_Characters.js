let s = "AAABBB"
// s = "AAAA"
// s = "BBBBB"
// s = "ABABABAB"
// s = "BABABA"
// s = "AAABBBAABB"
// s = "AABBAABB"

let c = 0;
function alternatingCharacters(s) {
    for (let i=0; i<s.length; i++) {
        if (s[i] === s[i+1]) {
            c = c + 1;
        }
    }
    return c;
}
console.log(alternatingCharacters(s));
