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
// 3 of a kind
function threeOfKind(){
	var threeOfKind=0;
	dice_value.sort();
	console.log(dice_value);
	for(var i=0; i< dice_value.length; i++){
		if(dice_value[0]==dice_value[1] && dice_value[0]==dice_value[2]||
		   dice_value[1]== dice_value[2]&& dice_value[2]==dice_value[3]|| 
			dice_value[2]==dice_value[3]&& dice_value[3]==dice_value[4]){
            
               threeOfKind += dice_value[i];
               $('.three_of_kind').html(threeOfKind);
		}
	}
	 return threeOfKind;
}
//four of a kind
function fourOfKind(){
	var fourOfKind=0;
	dice_value.sort();
	for(var i=0; i<dice_value.length;i++){
		if(dice_value[0]==dice_value[1]&&dice_value[0]==dice_value[2]
			&&dice_value[0]==dice_value[3]||dice_value[1]==dice_value[2]&&dice_value[2]==dice_value[3]
			&&dice_value[3]==dice_value[4] ){
			fourOfKind+= dice_value[i];
		$('.four_of_kind').html(fourOfKind);
		}
	}
	return fourOfKind;
}
//full house
function fullHouse(){
	var fullHouse=false;
	var score=0;
	dice_value.sort();
	for(var i=0; i< dice_value.length;i++){
		if(dice_value[0]==dice_value[1]&&
			dice_value[2]==dice_value[3]&&
			 dice_value[3]==dice_value[4]||
			 dice_value[0]==dice_value[1]&& dice_value[1]==dice_value[2]&&
			  dice_value[3]==dice_value[4]){
			fullHouse = true;
		
		}
	}
	  if(fullHouse){
         score+=35;
	  	 $('.fullHouse').html(score);
	  }
	 
	return fullHouse;
}
//sm straight
function smstraight(){
	var score=0;
	var x=dice_value.sort();
	    x= x.join("");
	 var r1= /1/;
	    var a=r1.test(x);
	 var r2= /2/;
         var b= r2.test(x);
	 var r3= /3/; 
	     var c= r3.test(x);
	   var r4= /4/; 
	     var d= r4.test(x);
	   var r5= /5/; 
	     var e= r5.test(x);
	   var r6= /6/; 
	     var f= r6.test(x);
	if(a && b && c && d || b && c && d && e || c && d && e && f){
		score+= 30;
		$('.sm').html(score);
	}
	

}
//lg straight
function lgstraight(){
	var score =0;
	  var x= dice_value.sort();
	     x=x.join("");
	     console.log(x);
	     if(x=="12345"|| x=="23456"){
	     	score+=40;
	     	    $('.lg').html(score);
	     }
	 
}
//chance
function chance(){
	var score=0;
	for(var i=0; i<dice_value.length;i++){
		 score += dice_value[i];

	$('.chance').html(score);  
	}
	return score;
}
//yahtzee
function yahtzee(){
	var score=0;
	if(dice_value[0]==dice_value[1]&& dice_value[1]== dice_value[2]
		&& dice_value[2]==dice_value[4]){
       score+=50;
   $('.yatzee').html(score);
	}
}
//fucntion to calculate the first 6 categories
function firstSix(){
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

    firstSix();
    threeOfKind();
    fourOfKind();
    fullHouse();
    smstraight();
    lgstraight();
    chance();
    yahtzee();
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
