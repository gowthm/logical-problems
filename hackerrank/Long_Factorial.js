let n = 25;
let meta = [];
const datum = data => (typeof meta[data] !== 'number') ? ((data - BigInt(1)) > 0 ? (data * datum(data - BigInt(1))): BigInt(1)) : meta[data] 
console.log(String(datum(BigInt(n))));
const d = String(datum(BigInt(n)));
console.log(d)
