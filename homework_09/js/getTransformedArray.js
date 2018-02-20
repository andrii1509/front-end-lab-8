function getTransformedArray(arr, func){
	var newArr = [];
  forEach(arr, function(item) {
    newArr.push(func(item));
  });  
  return newArr;
}
function increment() {
 return function(num) {
    return +num + 1;
  }
}
console.log(getTransformedArray([8, 4, 25], increment()));