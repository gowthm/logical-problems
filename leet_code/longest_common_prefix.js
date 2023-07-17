// let str = ["flower","flow","flight"];
let str = ["dog","racecar","car"]

let longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return 'zx';
        
    }
    let max_length_str = strs.sort((m,n) => {return m.length - n.length});
    let max_str = max_length_str[max_length_str.length-1];
    for (let m = 0; m<max_str.length; m++) {
        for (let g of strs) {
            
            if (g[m] != max_str[m]) {
                return g.slice(0, m).length > 0 ? g.slice(0, m) : ''
            }
        }
    }

}
console.log(longestCommonPrefix(str))