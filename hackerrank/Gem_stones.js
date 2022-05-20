// let arr = ['abcdde', 'baccd', 'eeabg']
let arr = ['vtrjvgbj', 'mkmjyaeav', 'sibzdmsk']

function gemstones(arr) {
    let t = arr.join('').split('')
    let temp = []
    let t1 = 0;
    t.filter(function(item) {
    if (temp.indexOf(item) == -1) {
        temp.push(item)
    }

    })
    for (let i=0; i<temp.length; i++) {
    let c = 0;
    
    for (let j=0; j<arr.length; j++) {
        if (arr[j].indexOf(temp[i]) != -1) {
            c = c+1;
        }
        if (c == arr.length) {
            t1 = t1+1;
        }
    }
    }
    return t1;
    }

// results

console.log(gemstones(arr))

