$(document).ready(function(){
  var die1=$('.die1');
  var die2=$('.die2');
  var die3=$('.die3');
  var die4=$('.die4');
  var die5=$('.die5');
  var turns=3;
  var dice;
  var dice_value = new Array(5);
  
  //roll function
	function roll(die,i){
	    rando = Math.floor(Math.random()*6)+1;
	    
	     die.html("<img  src=images/die"+rando+".png>");
	      die.find('img').attr('class', rando);
	      
          dice_value[i]=rando;
          console.log(dice_value);
	   $('img').height(50);
	};


	$('.die').click(function(){
         $(this).toggleClass('selected');   //adds border around die if clicked
  });

//attaches roll funcition to each die
$('.button').click(function(){
    for(i=0; i<=turns; turns--){
	      if(turns>0){
		    dice =[die1,die2,die3,die4,die5];

			  for(i=0; i<dice.length;i++){
				  	 if (!dice[i].hasClass('selected')){ 
				  	 	 roll(dice[i],i);
	                

				  	 }
			        else{
			        	// not to change value if selcted
			        	!roll(dice[i],i);
			        }
			     }
	       
		  }
		  else{
			$('.warning').html('Pick a category!');
		}
	}

  });   //button function


});
