var bank = 0;
var bonus=10;
var bonusKoefGlobal = 1; 
var bonusKoefLocal=1;
var symbol = "$";
var koefRandom = 5;
let question = confirm("Do you want to play a game?");
if (question ==true){
	console.log("wellcome");
  for (var j = 1; j > 0; j++){
		var koefWin = 3;
		var numRandom = Math.floor(Math.random() * koefRandom);
		bonusKoefLocal = bonusKoefGlobal;
		for (var i = 3; i > 0; i--) {			
			var num = parseInt(prompt("Enter N , (INTERVAL) = [1.." + koefRandom + "]"));
			console.log("Your number is: ", num);		
  		if(num == numRandom){
				bank = bank + bonus * bonusKoefLocal;
			}
			else{
				console.log("NO!!!");
				bonusKoefLocal = 0.5 * bonusKoefLocal;
				koefWin = koefWin - 1;
			}
			if (koefWin == 0) {
				console.log("You Loose!!");
				console.log("You win =", bank + symbol);
								
			}
		}

		question = confirm("Do you want to continue a game?");
		if (question == true){
			 bonusKoefGlobal = bonusKoefGlobal * 10;
			 bonus = bonus * bonusKoefGlobal;
			 koefRandom = koefRandom*2; 
			 console.log(bonusKoefGlobal);
			}
		else{
			console.log("You win =", bank + symbol);
			break;
		}
	}	
}
else{
	console.log("You did not become a millionaire");
}