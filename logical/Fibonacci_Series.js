let target = 1000000;
let t1 = 0;
let t2 = 1;
let seriesArr = [];
seriesArr.push(t1, t2);

// main function

function fibonacci(t1, t2, target) {
  while(target > t2) {
    let temp = t2;
    t2 = t2 + t1;
    t1 = temp;
    target > t2 ? seriesArr.push(t2) : '';
}
return seriesArr;
}


console.log(fibonacci(t1, t2, target))
