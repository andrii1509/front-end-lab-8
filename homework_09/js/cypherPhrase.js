var charactersMap = {a: 'o', c: 'd', t: 'g'}
function cypherPhrase(object, str){
  var arr = str.split('');
  var newStr = getTransformedArray(arr, replaceLetter(object));
	return newStr.join('');
}
console.log(cypherPhrase( charactersMap, 'kitty cat' )); // -> “kiggy dog”
function replaceLetter(map){
	return function(item){
  	return map[item] ? map[item] : item;
	}
}