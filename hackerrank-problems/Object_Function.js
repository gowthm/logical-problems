let ob = {
id: 1,
num:10,
num1:100,
name: "karthi",
fun: function(){
console.log(this.num+this.num1);
}
}
ob.fun();
function Ob() {
console.log('this', this);
}
