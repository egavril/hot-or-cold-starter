
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

function newGame () {

	secretNumber();

}

function secretNumber () {
	var number = Math.floor((Math.random() * 100) + 1);
	console.log(number);
};

