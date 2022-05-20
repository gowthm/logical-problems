let e = "SOS";
let s = "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS";
let e1 = e.split('');
let s1 = s.split('');
let c = 0;
let j = 0;
for (let i=0; i<s.length;i++) {
    console.log(e1[j], s1[i], j)
    if (e1[j] != s1[i]) {
        c = c+1;
    }
    j++;
    if (j == 3) {
        j = 0;
    }
}
console.log(c)
