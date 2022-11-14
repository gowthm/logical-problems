let n = [1,2,3,4,5,6,7,8];
let k = 4;
let duN = [];
for (let i=n.length-1; i>=k; i--) {
  let c = n.splice(i, 1);
  console.log(n, i)
  duN.push(c[0]);
}
duN = [...duN.reverse(), ...n];
console.log(duN)
