let obj  = [
    {a: 3, b: {c: 21, m: 3}},
    {b: {f: {g: 40}}},
    {m: 4},
    {p: {k: 5, l: 4}}
]
let total = 0;
function countEven(obj) {
    for (let c in obj) {
        console.log(obj)
        if (typeof obj[c] == 'object') {
            countEven(obj[c])
        } else {
            if (obj[c] %2 == 0) {
                total+=obj[c];
            }
        }
    }
    return total
    
}
console.log(countEven(obj))
