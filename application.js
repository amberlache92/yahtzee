$(document).ready(function(){
  var die1=$('.die1');
  var die2=$('.die2');
  var die3=$('.die3');
  var die4=$('.die4');
  var die5=$('.die5');
  
  
	function roll(die){
	    var rando = Math.floor(Math.random()*6)+1;
	     die.html("<img  src=images/die"+rando+".png>");
	     
	   $('img').height(50);
	};

	
	$('.dice').on('click', 'img', function(){
        $(this).addClass('selected');
	});

$('.button').click(function(){

   roll(die1);
  roll(die2);
  roll(die3);
  roll(die4);
  roll(die5);

//   $('img').addClass('selected');
});





});
