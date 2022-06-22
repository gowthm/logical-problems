let s = "hyderabad"
s = s.split('');
// output --> {'h':1,'y':1,'d':2,'e':1,'r:1','a':2,'b':1}

function countString(s) {
 let t = {};
s.filter((value, index, arr) => {
  let temp = 1;
  arr.filter((v, i, a) => {
    if (value == v && index != i) {
      temp = temp + 1;
    }
  })
  t[value] = temp
});
  return t;
}


console.log(countString(s))