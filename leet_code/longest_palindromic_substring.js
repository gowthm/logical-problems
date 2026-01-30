
// let s = "caab";
let s = "ac";
console.log(findPalindrem(s))
function findPalindrem(s) {
    let findPalin = []
    let string = s;
    let c = 0;
    let longPalin = '';
    if (string.length > 2) {
        for (let i = 0; i < string.length; i++) {
            let t = string[i];
            for (let j = i + 1; j < string.length; j++) {
                t += string[j];
                let reverseTemp = t.split('').reverse().join('')
                if (t === reverseTemp) {
                    findPalin.push(t)
                }
            }
        }
        for (let k = 0; k < findPalin.length; k++) {
            if (c < findPalin[k].length) {
                c = findPalin[k].length;
                longPalin = findPalin[k];
            }
        }
    } else if (string.length == 2) {
        longPalin = string.split('')[0]
    } else {
        longPalin = string;
    }

    return longPalin
}

