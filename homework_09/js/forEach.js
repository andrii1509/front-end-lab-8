function forEach(arr, func){
	for (var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
	return (arr);
}
function print() {
	return function (element) {
  	console.log(element);
	}
}
console.log(forEach([4, 3, 2], print()));