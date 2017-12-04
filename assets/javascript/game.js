//document.onkeypress= function(KeyPress) { //needs to cover the whole code!
//	document.reset(); -> do not use yet. want: when key is pressed after win or loss, then game will reset 
//}


var randomWords= ["what happens in vegas stays in vegas", "bellagio", "mgm grand", "chippendales", "thunder down under", "mandalay bay", "excalibur", "luxor", "cosmopolitan", "high roller", "the mirage", "planet hollywood", "stratosphere", "circus circus", "siegfried and roy", "jabbawockeez", "penn and teller", "the strip", "fremont street experience", "treasure island", "caesars palace", "the venetian", "cirque du soleil", "palazzo"];
//wordBank
var computerPhrase= randomWords[Math.floor(Math.random()*randomWords.length)];
//computerPhrase will show up in HTML
var spaceFiller= ""; //either _ or a space, then filled with letter

var guessesNumber= 14;
var wrongGuesses = [];
var winNumber= 0;

for (var i=0; i<computerPhrase.length; i++) {
	var letter= computerPhrase.charAt(i);
	if (letter === " ") {
		spaceFiller += " ";
	} else {
	spaceFiller += "-";
		}
	}  //make it for ---s the first time everything else in reset 
document.getElementById("hold").innerHTML =spaceFiller;
document.getElementById("guesses-left").innerHTML = guessesNumber;
document.getElementById("backgroundAudio").play();
//defining my functions 
//resets guess numbers, array of wrong guesses, redo -----,	
function reset() {
	guessesNumber= 14;
	document.getElementById("guesses-left").innerHTML= guessesNumber; 
	wrongGuesses =[];
	document.getElementById("usedLetters").innerHTML= wrongGuesses;
	computerPhrase = randomWords[Math.floor(Math.random()*randomWords.length)];
	spaceFiller ="";
	for (var j=0; j<computerPhrase.length; j++) {
		var letter= computerPhrase.charAt(j);
		if (letter === " ") {
			spaceFiller += " ";
		} else {
			spaceFiller += "-";
		}
	} 
	document.getElementById("hold").innerHTML=spaceFiller;
}

function alterAt ( n, c, originalString ) {
	    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
	}

function guessLetter( yourletter, shown, answer ) {
	  var checkIndex = 0;  
	  checkIndex = answer.indexOf(yourletter);
	  while ( checkIndex >= 0 ) {
	     shown = alterAt( checkIndex, yourletter, shown );
	     checkIndex = answer.indexOf(yourletter, checkIndex + 1);
	    }
	    return shown;
	}


document.onkeypress = function(keyPress) {	
	document.getElementById("hold").innerHTML = spaceFiller;
	document.getElementById("guesses-left").innerHTML = guessesNumber;
	document.getElementById("usedLetters").innerHTML = wrongGuesses;
	if (spaceFiller === computerPhrase && guessesNumber > 0) {
		winNumber= winNumber+1;
		document.getElementById("wins").innerHTML=winNumber;
	}



	document.onkeyup = function(event){
	    console.log(event);
	    var playerChoice= event.key.toLowerCase();
	    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	    if (alphabet.includes(playerChoice) === false) {
	    	alert(`Please pick a letter!`);
	    } else if(wrongGuesses.includes(playerChoice) === true) {
	    	alert(`You already guessed that letter!`)
	    } else if (computerPhrase.indexOf(playerChoice)<0) {
	    	guessesNumber= guessesNumber -1;
			wrongGuesses.push(playerChoice);
			document.getElementById("guesses-left").innerHTML = guessesNumber;
			document.getElementById("usedLetters").innerHTML = wrongGuesses;
	    } else{
	    spaceFiller = guessLetter(playerChoice, spaceFiller, computerPhrase );
	    document.getElementById("hold").innerHTML =spaceFiller;
		}
		if (spaceFiller === computerPhrase && guessesNumber > 0) {
		winNumber= winNumber+1;
		document.getElementById("wins").innerHTML=winNumber;
		alert(`You won! The answer was : ${computerPhrase.toUpperCase()}. Fun Vegas Fact: Tiesto performs and had a residency at MGM Grand! Check out his set sometime!`);
		reset();
		document.getElementById("backgroundAudio").pause();
		document.getElementById("loseAudio").pause();
		document.getElementById("winAudio").play();

		}
		if (guessesNumber === 0) {
				alert(`You lost! The answer was : ${computerPhrase.toUpperCase()}. Time for some Taylor! Try again!`);
				reset();
				document.getElementById("backgroundAudio").pause();
				document.getElementById("winAudio").pause();
				document.getElementById("loseAudio").play();
		}
	}
	document.getElementById("wins").innerHTML = winNumber;
}



