let password = 4700; // Ab1, #HackerRank
let r = 0;
let  password1 = JSON.stringify(password)
let forN = password1.match(/[!@#$%^&*()+-]/);
let forL = password1.match(/[0-9]/);
let forU = password1.match(/[A-Z]/);
let forS = password1.match(/[a-z]/);
if (!forN) {
    r = r+1;
}
if (!forL) {
    r = r +1;
}
if (!forU) {
    r = r +1;
}
if (!forS) {
    r = r+1;
}
r = Math.max(r, 6-n)
console.log(r)
