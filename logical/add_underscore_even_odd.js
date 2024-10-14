// let s = [2,36,7,7,9]
// 2_367_79

let s = [3,8,1,2,11,3,4]
// // 38_1_2_11_34_

function validateNum(num) {

    let s = '';
    let currentValid = 0;
    for (let i=0; i<num.length; i++) {
        if (currentValid == 0) {
            if (num[i]%2 == 1) {
                 s+=num[i];
            // currentValid = 1;
            } else {
                 s+=num[i]+'_'
            currentValid = 1;
            }
           
        } else {
            if (num[i]%2 == 0) {
                 s+=num[i];
            // currentValid = 0;
            } else {
                  s+=num[i]+'_'
            currentValid = 0;
            }
          
        }
        
    }
    return s
    
}
console.log(validateNum(s))
