function getClosestToZero(){
	var min = arguments[0];
	var i;
	var number = 0;
	for (i = 0; i < arguments.length; i++){
		
		if (Math.abs(arguments[i]) < min){
			min = Math.abs(arguments[i]);
			number = arguments[i]
		}
	}
	return(number);
}
