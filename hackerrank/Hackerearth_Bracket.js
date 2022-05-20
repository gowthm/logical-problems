let input = '()()(())()';
input=input.split('');
    var min = 2; count=0; bal=0;
    
    for(var i=0; i<input.length; i++){
        if(input[i] === '('){
            bal++;
        }else{
            bal--;
        }
 
        if(min>bal){
            min=bal;
            count=0;
        }
 
        if(min === bal){
            count++;
        }
        console.log('min',min, input[i]);
        console.log(bal);
        console.log(count);
    }
    // if(bal === 0){
    //     process.stdout.write(count.toString());
    // } else {
    //     process.stdout.write('0'); 
    // }
