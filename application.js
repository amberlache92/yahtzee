$(document).ready(function(){
  var die1=$('.die1');
  var die2=$('.die2');
  var die3=$('.die3');
  var die4=$('.die4');
  var die5=$('.die5');


  
  //roll function
	function roll(die){
	    var rando = Math.floor(Math.random()*6)+1;
	     die.html("<img  src=images/die"+rando+".png>");
	     
	   $('img').height(50);
	};


	$('.die').click(function(){
         $(this).toggleClass('selected');   //adds border around die if clicked
  });
	
//attaches roll funcition to each die
$('.button').click(function(){

  var dice =[die1,die2,die3,die4,die5];

  for(i=0; i<dice.length;i++){
	  	 if (!dice[i].hasClass('selected')){
	  	 	 roll(dice[i]);
	  	 }
  	 //}
  }
	 
});





});
