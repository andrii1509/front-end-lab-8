function getMin(){
	var min = 0;
	var i;
	min = arguments[0];
	for (i = 0; i < arguments.length; i++){
			if (arguments[i] < min){
			min = arguments[i];
		}
	}
	return(min);
}