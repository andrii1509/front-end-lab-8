function getFilteredArray(arr, func){
	for (var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}
function predicateFunction() {
return function (element) {
	 if (element > 3){
 	 console.log(element);
 	}
 }
}
console.log(getFilteredArray([0, 1, 2, 8, 4, 25], predicateFunction()));