function reverseNumber(argument) {
	var reverseNum = 0;
	while(argument !== 0){
		reverseNum = reverseNum * 10 + argument % 10;
	  argument = Math.floor(argument / 10);
	}
	return(reverseNum);
}

// function reverse(argument) {
// 	argument = String(argument);
//   var newNumber = '';
//   for (var i = argument.length - 1; i >= 0; i--){
//     newNumber += argument[i];
// 	  newNumber = +newNumber;
// 	}
// 	  return newNumber;
// }