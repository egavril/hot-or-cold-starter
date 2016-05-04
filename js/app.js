var number;
var getGuess;

$(document).ready(function(){

	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* check how close the guess is */

function checkGuess(getGuess) {

	var guessNumber = parseInt(getGuess);
	var guessDifference;

	if (getGuess > 100 || getGuess < 1) {
		$("#feedback").text("Enter a number between 1 and 100!");
	}
	else if (getGuess == number) {
		$("#feedback").text("Got it!");
	} 
	else if (guessNumber > number) {
		guessDifference = guessNumber - number;
	} 
	else if (guessNumber < number) {
		guessDifference = number - guessNumber;
	}
	

	if (guessDifference >= 1 && guessDifference <= 10) {
		$("#feedback").text("Very Hot");
	} 
	else if (guessDifference < 10 && guessDifference <= 20) {
		$("#feedback").text("Hot");
	} 
	else if (guessDifference < 20 && guessDifference <= 30) {
		$("#feedback").text("Warm");
	} 
	else if (guessDifference < 30 && guessDifference <= 50) {
		$("#feedback").text("Cold");
	} 
	else if (guessDifference > 50) {
		$("#feedback").text("Ice Cold");
	}

};

/* function for starting anew */

function newGame() {

	secretNumber();

	$("#guessButton").click(function(e) {
		e.preventDefault();
		guessCount();
//		$("#userGuess").val(placeholder="Enter another guess!");	
		addGuess();
		checkGuess(getGuess);
		Clear();
	});
}

/* generate random secret number */


function secretNumber() {
	number = Math.floor((Math.random() * 100) + 1);
	console.log(number);
};

/* guess counter increases by 1 with each button press */
var count = 0;

function guessCount() {
	count++; 
	$("#count").text(count);
};

/* clear input form */

function Clear() {      
    $("#userGuess").each(function() {
    $(this).val("");
//  $this.reset();
    });
}

/* add previous guess below counter for reference */

function addGuess() {
	getGuess = $("#userGuess").val();
	$("#guessList").append("<li>" + getGuess + "</li>");
//	var appendGuess = "<li>" + getGuess + "</li>";
//	$("#guessList").append(appendGuess);
}

//  $(".new").click(function(e) {
//		newGame();
//  });

//  $(".new").click(newGame());

//	$(".new").on('click', function(){
//		window.location.reload(true);
//  });