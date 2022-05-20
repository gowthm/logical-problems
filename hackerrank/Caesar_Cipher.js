const le = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let s = "Always-Look-on-the-Bright-Side-of-Life";
s = s.split('');
console.log(s)
const k = 5;
const arr = [];
s.map(data => {
    if(le.includes(data)) {
        console.log(data)
          let s = le.indexOf(data)+k;
    if(s>25) {
        s = s%25;
    }
    arr.push(le[s]);
    } else {
        arr.push(data)
    }
  
})
console.log(le.indexOf('w')+5)
console.log(arr.join().replace(/,/g, ''))
