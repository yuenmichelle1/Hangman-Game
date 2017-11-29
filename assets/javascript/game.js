document.onkeyup= function(event) { 
	alert("Let's play Hangman!");
}
var randomWords= ["What Happens in Vegas Stays in Vegas", "Bellagio", "MGM Grand", "Chippendales", "Thunder Down Under", "Mandalay Bay", "Excalibur", "Luxor", "Cosmopolitan", "High Roller", "The Mirage", "Planet Hollywood", "Stratosphere", "Circus Circus", "Siegfried and Roy", "Jabbawockeez", "Penn and Teller", "The Strip", "Fremont Street Experience", "Treasure Island", "Caesars Palace", "The Venetian", "Cirque du Soleil", "Palazzo"];

var computerPhrase= randomWords[Math.floor(Math.random()*randomWords.length)];
//computerPhrase will show up in HTML
var letterFiller= ""; //either _ or a space, then filled with letter
for (i=0; i<computerPhrase.length; i++) {
	var letter= computerPhrase.charAt(i);
	if (letter === " ") {
		letterFiller += "&nbsp &nbsp &nbsp";
	} else {
		letterFiller += " _ ";
	}
} 
//chosen answer will either have a space or if it is a letter will be filled with _
document.getElementById("hold").innerHTML = letterFiller;


var WinNumber= 0;

if (letterFiller !== " _ ") {
	WinNumber++;
}

var guessesNumber= 14;
//if we guess the wrong letter then guessesNumber goes down
//guessesNumber--

document.getElementById("guesses-left").innerHTML = guessesNumber;

