var a=0, b=0, c=0;
console.log(a, b, c)
a = parseInt(prompt("a=",));
b = parseInt(prompt("b=",));
c = parseInt(prompt("c=",));
var s = 0, p = 0 ;
p = (a + b + c) / 2;
alert(p);
s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
console.log("square=",s);
var pr ;
pr = Math.sqrt(a * a + b * b);
if (a == b & b == c & a == c) {
	console.log("rivnostoronnii")
}
else if (pr==c) {
	console.log("pryamokutnii")
}
else if (a==b | b==c | a==c){
	console.log("rivnobedrennii")
}
else{
	console.log("dovilnii")
}