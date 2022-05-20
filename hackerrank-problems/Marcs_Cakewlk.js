let calorie = [3,2,1];

function marcsCakewalk(calorie) {
    calorie = calorie.sort((a,b) => b-a)
    console.log(calorie)
    let t = 0;
    for (let i=0; i<calorie.length; i++) {
        let temp = Math.pow(2, i)*calorie[i];
        t = t + temp;
    }
    return t;
    
}
console.log(marcsCakewalk(calorie))


// calorie = 504 378 291 380 728 630 797 212 32 792 895 635 850 853 859 127 653 655 476 748
// calorie = 7 4 9 6