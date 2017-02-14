$(document).ready(function(){
  var die1=$('.die1');
  var die2=$('.die2');
  var die3=$('.die3');
  var die4=$('.die4');
  var die5=$('.die5');
  var turns=3;
  var dice;
  var dice_value = new Array(5);
  var ones=0;
  var twos=0;
  var threes=0;
  var fours=0;
  var fives=0;
  var sixes=0;
  var die;
  var score=0;
  var called= false;
  //roll function
	function roll(die,i){
		called = true;
	    rando = Math.floor(Math.random()*6)+1;
	    
	     die.html("<img  src=images/die"+rando+".png>");
	      die.find('img').attr('class', rando);
	      
          dice_value[i]=rando;
        
	   $('img').height(50);
	  
	};

  

	$('.die').click(function(){
         $(this).toggleClass('selected');   //adds border around die if clicked
  });


function calculate(){
    for(var i=0; i< dice_value.length;i++){

    	
	   if( dice_value[i] == 1){
	   	 
	   	 ones +=1;
	   	  
	   	$('.oneScore').html(ones);

	   } 

	   if( dice_value[i] == 2){
	   	 
	   	 twos += 2;
	   	  $('.twoScore').html(twos);
	   	  
	   } 
	    $('.aceScore').html(ones);
	    if( dice_value[i] == 3){
	    	
	   	 threes += 3;
	   	  $('.threeScore').html(threes);
	   	 
	   } 
	   
	    if( dice_value[i] == 4){
	    	
	   	 fours += 4;
	   	  $('.fourScore').html(fours);
	   	  
	   } 
	   
	    if( dice_value[i] == 5){
	    
	   	 fives += 5;
	   	  $('.fiveScore').html(fives);
	   	 
	   } 
	   if( dice_value[i] == 6){
	   	  
	   	 sixes += 6;
	   	  $('.sixScore').html(sixes);
	   	  
	   } 
      
	
	}
	turns =0;
         
	
}
$('.button2').click(function(){

    calculate();
});


//attaches roll funcition to each die
$('.button').click(function(){
   
	     
	 for(i=0; i<=turns; turns--){
	      if(turns>0){
		    dice =[die1,die2,die3,die4,die5];

			  for(i=0; i<dice.length;i++){
			  	   	
			  	    
				  	 if (!dice[i].hasClass('selected')){ 
				  	 	  roll(dice[i],i);

                        

                       die= dice[i].find('img').attr('class');

	              }
                   
				 

	              }



            }
	   
		  else{
			$('.warning').html('Pick a category!');
		}

     
	
 }



  });   //button function

 
	  
	
	

 



 
});
