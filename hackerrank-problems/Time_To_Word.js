let h = 7;
let m = 29;
const hours = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const minuests = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine']
if (m == '00') {
    console.log(hours[h], "o' clock" );
} else if (m <= 30) {
  if (m == 15) {
    console.log("quater past "+hours[h]);
  } else if (m == 30) {
        console.log("half past "+hours[h]);
  } else {
            console.log( minuests[m], "minutes past "+hours[h]);
  }
} else if (m > 30) {
  if (m == 45) {
    console.log('quater to '+hours[h+1] );
  } else {
    console.log(minuests[60-m]+ " minutes to "+hours[h+1]);
  }
}

