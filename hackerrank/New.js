let topic = ['11101', '10101', '11001', '10111', '10000','01110'];
let g = [];
console.log(topic.length);
for(let i=0;i<topic.length;i++){
    let temp_1 = topic[i].toString();
    for(let j=i+1;j<=temp_1.length;j++) {
        let temp_2 = topic[j].toString();
        let max = 0;
        for(let k=0;k<temp_1.length;k++) {
            if(temp_1[k]==='1'){
                max++;
            } else if(temp_2[k]==='1') {
                max++;
            }
        }
          g.push(max);  
    }
}
console.log(g)
let maxData = Math.max(...g);
let maxCount = 0;
for(let i=0;i<g.length;i++){
    if(maxData===g[i]) { 
        maxCount++;
    }
}
let result_Data = [];
result_Data.push(maxData);
result_Data.push(maxCount);
console.log(result_Data);
