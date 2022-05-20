let arr = [3,4,7,5,6,2,1];
let n = 6;
for (let i=1;i<arr.length;i++) {
    let j = i;
    while(j > 0) {
        
      if (arr[i] < arr[j-1]) {
          for (let y=i; y>0; y--) {
              if (arr[y] < arr[y-1]) {
                  let temp = arr[y];
                  arr[y] = arr[y-1];
                  arr[y-1] = temp;
              }
          }
      }
        j--;
    }
    console.log(arr.join(' '))
}


