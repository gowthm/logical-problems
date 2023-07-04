let s = "(}{)";
let s = "({{{{}}}))";
function isValid(s) {
  let s1 = s.split('')
     let status = false;
     if (s1.length > 1 ) {
 for (let i=0; i<s.length; i++) {
        if (s[i] == '{') {
            if (s[i+1] == '}' || s[s.length-1-i] == '}') {
                status = true;
            } else {
                status = false;
            }
        } else if (s[i] == '[') {
             if (s[i+1] == ']' || s[s.length-1-i] == ']') {
                 status = true;
            } else {
                status = false;
            }
        }  else if (s[i] == '(') {
             if (s[i+1] == ')' || s[s.length-1-i] == ')') {
                 status = true;
            } else {
                status = false;
            }
        }
    }
     } else {
         status = false;
     } 
     return status
    
}
console.log(isValid(s))
