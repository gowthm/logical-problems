let s ="pwwkew";
s = s.split('');
let c = 0;
let arr = [];
let p_count = 0;
if (s.length > 1) {
  for (let i=0; i<s.length; i++) {
    console.log(arr.indexOf(s[i]), arr.indexOf(s[i+2]), p_count);
  if (arr.indexOf(s[i]) > -1 && arr.indexOf(s[i+1]) > -1) {
    if (c > p_count) {
          p_count = c;
    }
    c = 1;
  } else {
    c = c + 1;
  }
  arr.push(s[i]);
} 
} else if(s.length > 0) {
  p_count = 1;
} else {
    p_count = 0;
}

console.log(p_count, s)
