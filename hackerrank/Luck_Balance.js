// let k = 3;
// let contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];

let k = 5;
let contests = [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1], [18, 1], [13, 1]];

function luckBalance(k, contests) {
    let notImportant = 0;
    let importantContest = [];
    for (let k = 0; k < contests.length; k++) {
        if (contests[k][1] === 1) {
            importantContest.push(contests[k][0])
        } else
            notImportant = notImportant + contests[k][0];
    }
    importantContest = importantContest.sort((a, b) => b - a);
    importantContest.filter(function (item, index) {
        if (index < k) {
            notImportant = notImportant + importantContest[index];
        } else {
            notImportant = notImportant - importantContest[index];
        }
    })
    return notImportant;
}
console.log(luckBalance(k, contests))