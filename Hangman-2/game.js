var randomWords= ["bellagio", "chippendales", "excalibur", "luxor", "cosmopolitan",  "stratosphere",  "jabbawockeez", "palazzo"];
//wordBank
var computerPhrase= randomWords[Math.floor(Math.random()*randomWords.length)];
//computerPhrase will show up in HTML
var spaceFiller= ""; //either _ or a space, then filled with letter


var wrongGuesses = [];
var winNumber= 0;
var guessesNumber= 14;
for (var i=0; i<computerPhrase.length; i++) {
	var letter= computerPhrase.charAt(i);
	if (letter === " ") {
		spaceFiller += " ";
	} else {
	spaceFiller += "-";
		}
	}  //make it for ---s the first time everything else in reset 
document.getElementById("hold").innerHTML=spaceFiller;
document.getElementById("guesses-left").innerHTML = guessesNumber;
document.getElementById("wins").innerHTML = winNumber;
//split spaceFiller into an array
var arrReplace = spaceFiller.split('')
var arrCheck = computerPhrase.split('')
var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function reset(){
	guessesNumber=14;
	wrongGuesses=[];
	computerPhrase= randomWords[Math.floor(Math.random()*randomWords.length)];
	spaceFiller="";
	for (var k=0; k<computerPhrase.length; k++) {
	var letter= computerPhrase.charAt(k);
	if (letter === " ") {
		spaceFiller += " ";
	} else {
	spaceFiller += "-";
		}
	}
	arrReplace = spaceFiller.split('');
	arrCheck = computerPhrase.split('');
	document.getElementById("hold").innerHTML= spaceFiller;
	document.getElementById("guesses-left").innerHTML = guessesNumber;
	document.getElementById("usedLetters").innerHTML = wrongGuesses;
}

//replace letter with playerGuess
document.onkeyup= function(event){
	var playerGuess=event.key.toLowerCase();
	for (var j=0; j<arrCheck.length;j++){
		if (playerGuess===arrCheck[j]){			
			arrReplace[j] = playerGuess;
			spaceFiller =arrReplace.join('');
			document.getElementById("hold").innerHTML =spaceFiller;
			
		} 
	}
	if (arrCheck.includes(playerGuess) === false && wrongGuesses.includes(playerGuess)=== false && alphabet.includes(playerGuess)===true) {
		wrongGuesses.push(playerGuess);
		document.getElementById("usedLetters").innerHTML =wrongGuesses;
		guessesNumber= guessesNumber-1;
		document.getElementById("guesses-left").innerHTML = guessesNumber;
	}
	if (spaceFiller ===computerPhrase &&  guessesNumber > 0) {
		winNumber= winNumber+1;
		document.getElementById("wins").innerHTML =winNumber;
		reset();
	}
	if (guessesNumber <= 0){
		alert(`You lost! Try again`);
		reset();
	}
}
