let s = "abc";
// let s = "abcba"
// let s = "cba"
// let s = "abcba"
function theLoveLetterMystery(s) {
    let s2 = s;
    let c = 0;
    s2 = s2.split('').reverse().join('');
    for (let i=0; i<s.length; i++) {
    if (s2.charCodeAt(i) > s.charCodeAt(i)) {
                c = c + Math.abs(s2.charCodeAt(i)-s.charCodeAt(i))

    }
    }
    return c;
}
console.log(theLoveLetterMystery(s))