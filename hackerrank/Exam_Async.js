function sum(number1, number2, callback) {
  setImmediate(() => {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') 
      callback(new Error('the first and second arguments must be number'));
      const sum = parseInt(number1) + parseInt(number2);
      callback(null, sum);
	console.log(sum)
  });
}
