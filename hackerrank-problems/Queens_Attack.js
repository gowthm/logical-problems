// 88587 9
// 20001 20003
// 20001 20002
// 20001 20004
// 20000 20003
// 20002 20003
// 20000 20004
// 20000 20002
// 20002 20004
// 20002 20002
// 564 323

let n = 88587;
let r_q = 20001;
let c_q = 20003;
let ob = [[20001, 20002], [20001,20004], [20000,20003], [20002,20003], [20000,20004], [20000,20002], [20002,20004], [20002,20002], [564,323]];

let k = 9;
let d1 = Math.min(r_q-1, c_q-1);
let d2 = Math.min(n-r_q, n-c_q);
let d3 = Math.min(n-r_q, c_q-1);
let d4 = Math.min(r_q-1, n-c_q);
let r1 = c_q-1;
let r2 = n-c_q;
let c1 = r_q-1;
let c2 = n-r_q;
for (let i=0; i< k; i++) {
    if (r_q > ob[i][0] && c_q > ob[i][1] && r_q-ob[i][0]==c_q-ob[i][1]) {
        d1 = Math.min(d1, r_q-ob[i][0]-1);
    }
    if (ob[i][0] > r_q && ob[i][1] > c_q && ob[i][0]-r_q == ob[i][1]-c_q) {
        d2 = Math.min(d2, ob[i][0]-r_q-1);
    }
    if (ob[i][0] > r_q && ob[i][0] < c_q && ob[i][0]-r_q == c_q-ob[i][1]) {
        d3 = Math.min(d3, ob[i][0]-r_q-1);
    }
    if(ob[i][0] < r_q && ob[i][1] > c_q && r_q-ob[i][0] == ob[i][1]-c_q ) {
        d4 = Math.min(d4, r_q-ob[i][0]-1);
    }
    if (r_q == ob[i][0] && c_q > ob[i][1]) {
        r1 = Math.min(r1, c_q-ob[i][1]-1);
    }
    if (r_q == ob[i][0] && c_q < ob[i][1]) {
        r2 = Math.min(r2, ob[i][1]-c_q-1);
    }
    if (r_q > ob[i][0] && c_q == ob[i][1]) {
        c1 = Math.min(c1, r_q-ob[i][0]-1);
    }
    if (r_q < ob[i][0] && c_q == ob[i][1]) {
        c2 = Math.min(c2, ob[i][0]-r_q-1);
    }
}
console.log(d1,d2,d3,d4,r1,r2,c1,c2)
let total = d1+d2+d3+d4+r1+r2+c2+c1;
console.log(total);



