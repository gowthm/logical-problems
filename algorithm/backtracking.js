// A backtracking algorithm is a general algorithmic technique for finding solutions to computational problems, 
// particularly constraint satisfaction problems. 
// It systematically explores all possible solutions by building candidate solutions incrementally.


function back_tracking(id, comb) {
    if (num_list.length == id) {
        arr.push([...comb])
        return;
    }
    comb.push(num_list[id]);
    back_tracking(id + 1, comb);
    comb.pop();
    back_tracking(id + 1, comb);
    return arr;

}

let num_list = [1, 2, 3, 4];
let arr = [];
console.log(back_tracking(0, []));