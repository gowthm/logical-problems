let s = "ivvkx".split(''); // bcxz, ivvkxq, acxz, ivvkx
let n1 = [];
let n2 = [];
let j = s.length-1;
let c = true;
console.log(j)
for (let i=0; i<s.length; i++) {
    n1.push(s[i].charCodeAt());
    n2.push(s[j].charCodeAt());
    j--;
    if (i>=1 && c) {
        let d = Math.abs(n1[i-1] - n1[i]);
        let d2 = Math.abs(n2[i-1] - n2[i]);
        if (d != d2) {
            c = false;
        }
    }
}
let result = c ? 'Funny' : 'Not Funny';
console.log(n1, n2, result);
