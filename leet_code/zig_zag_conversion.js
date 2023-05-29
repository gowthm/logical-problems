let s = "PAYPALISHIRING";
// Output: "PAHNAPLSIIGYIR"
let numRows = 3;
console.log(zigzagConversion(s, numRows))
function zigzagConversion(s, numRows) {
    let rev = false;
    let curRow = 0;
    let row = [];
    let result = ''
    for (let i=0; i<numRows; i++) {
        row[i] = [];
    }
    for (let j=0; j<s.length; j++) {
        row[curRow].push(s[j]);
        if (!rev) {
            ++curRow;
        } else {
            --curRow;
        }
    if (curRow == numRows-1 || curRow == 0) {
        rev = !rev;
    }
    }
   row.map(el=> {
       result+=el.join('')
   });
   return result
    
}
