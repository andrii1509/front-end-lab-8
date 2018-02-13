let n = parseInt(prompt("N=",));
var i=0;
while (i < n) {
	let symbol = "";
  let space = "";
  for (let j = 0; j < n - i; j++){
  	space += "   ";
  }
  for (let j = 0; j < 2 * i + 1; j++){
    symbol += "[~]";
  }
  console.log(space + symbol);
  i++;
}