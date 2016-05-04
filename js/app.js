

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

function newGame() {

	secretNumber();

	$("#guessButton").click(function(e) {
		e.preventDefault();
		guessCount();
//		$("#userGuess").val(placeholder="Enter another guess!");	
		addGuess();
		Clear();


	});

}

/* generate random secret number */

function secretNumber() {
	var number = Math.floor((Math.random() * 100) + 1);
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

function addGuess() {
	var getGuess = $("#userGuess").val();
	$("#guessList").append("<li>" + getGuess + "</li>");
//	var appendGuess = "<li>" + getGuess + "</li>";
//	$("#guessList").append(appendGuess);
}