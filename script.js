const isPowerOfTwo = (number) => {
  //your code here
	if(number && (number - 1) == 0){
		return true;
	}
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
