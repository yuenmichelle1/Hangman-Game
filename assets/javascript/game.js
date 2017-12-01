//document.onkeypress= function(KeyPress) { //needs to cover the whole code!
//	document.reset(); -> do not use yet. want: when key is pressed after win or loss, then game will reset 
//}

var randomWords= ["what happens in vegas stays in vegas", "bellagio", "mgm grand", "chippendales", "thunder down under", "mandalay bay", "excalibur", "luxor", "cosmopolitan", "high roller", "the mirage", "planet hollywood", "stratosphere", "circus circus", "siegfried and roy", "jabbawockeez", "penn and teller", "the strip", "fremont street experience", "treasure island", "caesars palace", "the venetian", "cirque du soleil", "palazzo"];
//wordBank
var computerPhrase= randomWords[Math.floor(Math.random()*randomWords.length)];
//computerPhrase will show up in HTML
var spaceFiller= ""; //either _ or a space, then filled with letter
for (var i=0; i<computerPhrase.length; i++) {
	var letter= computerPhrase.charAt(i);
	if (letter === " ") {
		spaceFiller += " ";
	} else {
		spaceFiller += "-";
	}
} 
var guessesNumber= 14;
var wrongGuesses = [];
var winNumber= 0;

document.onkeypress = function(keyPress) {
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
		}
		if (guessesNumber === 0) {
				alert(`You lost!`);
		}

	}


	document.getElementById("wins").innerHTML = winNumber;

	function alterAt ( n, c, originalString ) {
	    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
	}

	function guessLetter( letter, shown, answer ) {
	    var checkIndex = 0;
	    
	    checkIndex = answer.indexOf(letter);
	    while ( checkIndex >= 0 ) {
	        shown = alterAt( checkIndex, letter, shown );
	        checkIndex = answer.indexOf(letter, checkIndex + 1);
	    }
	    return shown;
	}



	//chosen answer will either have a space or if it is a letter will be filled with _
	document.getElementById("hold").innerHTML = spaceFiller;


	//if we guess the wrong letter then guessesNumber goes down




	document.getElementById("guesses-left").innerHTML = guessesNumber;

	//filler for reset when there is new word 


	document.getElementById("usedLetters").innerHTML = wrongGuesses;
	//filler for reset when there is new word

}

