// let m = 8;
// let arr = [1,3,4,4,6,8];
let m = 4;
let arr = [1, 4, 5, 3, 2]
let result = []
function icecreamParlor(m, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i == j) {
                break;
            }
            if (arr[i] + arr[j] == m) {
                if (i == 0) {
                    result.push(i + 1);
                    result.push(j + 1)
                } else {
                    result.push(j + 1)
                    result.push(i + 1);
                }
                return result
            }
        }
    }

}
console.log(icecreamParlor(m, arr));