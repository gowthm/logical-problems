let c = 'dfgkdfpoccnspdoiansncodsjdcndsdjonsdgjsdgnskadnafjbsdcjnsdcjcskjscdncsdisjdnsdvbsdvooiusodscnscsdonsdvosdvnsdvosdvonsdvnsdfsdfsnsdnasdkaskdjasdjasdbsdasdasdaoooooasodaosdoooasodoadaosdasnvcoevoernovercsoksdcnsdcihsd';
let k = 5;
let arr = [];
for(let i = 0; i< c.length-k+1; i++) {
    let data = c.substring(i, i+k);
    let count = 0;
     for(let j = 0 ; j< data.length;j++) {
        if (data[j] == 'a' || data[j] == 'e' || data[j] == 'i' || data[j] == 'o' || data[j] == 'u') {
            count = count + 1;
        }
    }
    let r = {
        countData: count,
        value: data,
    };
    arr.push(r)
}
console.log(arr)
let max = 0;
let originalData;
arr.forEach(a => {
    if(a.countData > max) {
        max = a.countData;
        originalData = a.value;
    }
});
console.log(originalData);
