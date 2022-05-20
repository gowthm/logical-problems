let p = 100;
let d = 1;
let m = 1;
let s = 99;
let to = p;
let teP = p;
let n = p > s ? 0 : 1;
while(s > to) {
    teP = teP-d;
    if (teP < m) {
        teP = m
    }
    to = to + teP;
    if (s < to) {
        break;
    }
    n++;
    // console.log(teP);
}
console.log(n)

