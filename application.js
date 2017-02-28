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
  var turnOver=false;
  var rounds=13;
  //roll function
	function roll(die,i){
		
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
	var score=0;
	dice_value.sort();
	console.log(dice_value);
	for(var i=0; i< dice_value.length; i++){
		if(dice_value[0]==dice_value[1] && dice_value[0]==dice_value[2]||
		   dice_value[1]== dice_value[2]&& dice_value[2]==dice_value[3]|| 
			dice_value[2]==dice_value[3]&& dice_value[3]==dice_value[4]){
            
               score+= dice_value[i];
               $('.three_of_kind').html(score);
		}
	}
	 return score;
}
//four of a kind
function fourOfKind(){
	var score=0;
	dice_value.sort();
	for(var i=0; i<dice_value.length;i++){
		if(dice_value[0]==dice_value[1]&&dice_value[0]==dice_value[2]
			&&dice_value[0]==dice_value[3]||dice_value[1]==dice_value[2]&&dice_value[2]==dice_value[3]
			&&dice_value[3]==dice_value[4] ){
			score+= dice_value[i];
		$('.four_of_kind').html(score);
		}
	}
	return score;
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
	 
	return score;
}
//sm straight
function smstraight(){
	
	var score=0;
	var x=dice_value.sort();

                      //
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
	

	   
	     
	return score;

}
//lg straight
function lgstraight(){
	var score =0;
	  var x= dice_value.sort();
	     x=x.join("");
	     
	     if(x=="12345"|| x=="23456"){
	     	score+=40;
	     	    $('.lg').html(score);
	     }
	     return score;
	 
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
	return score;
}
//fucntion to calculate the first 6 categories
function firstSix(a){
    for(var i=0; i< dice_value.length;i++){
    
    	
	   if( dice_value[i] == 1){
		   	
	   	     ones +=1;
	     $('.aceScore').html(ones);
	   } 

	   if( dice_value[i] == 2){
	   	 
	   	 twos += 2;
	   	  $('.twoScore').html(twos);
	   	
	   } 
	    // $('.aceScore').html(ones);
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
//calculates possibe scores
$('.button2').click(function(){
  $(this).prop('disabled',true);
    firstSix();
    threeOfKind();
    fourOfKind();
    fullHouse();
    smstraight();
    lgstraight();
    chance();
    yahtzee();
    $('.score').css('color','rgba(105,105,105,0.5');
    $('.die').removeClass('selected');
    
});



function category(){
var score =$('.score');


 
    $('td').click(function(){
 	if($(this).hasClass('chosen')){
 		
 	  alert('im clicked');
 	  turnOver=false;
 	}

 });


  score.each(function(){
        $(this).click(function(){

        	if($(this).hasClass('aceScore')){
        		  $(this).html(ones);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		   console.log(true); 
        	}
        	if($(this).hasClass('twoScore')){
        		  $(this).html(twos);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
                   turnOver=true;
        	}
        	if($(this).hasClass('threeScore')){
        		  $(this).html(threes);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('fourScore')){
        		  $(this).html(fours);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('fiveScore')){
        		  $(this).html(fives);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('sixScore')){
        		  $(this).html(sixes);
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
          //lower section
          if($(this).hasClass('three_of_kind')){
        		  $(this).html(threeOfKind());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
       if($(this).hasClass('four_of_kind')){
        		  $(this).html(fourOfKind());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('fullHouse')){
        		  $(this).html(fullHouse());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('three_of_kind')){
        		  $(this).html(threeOfKind());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('sm')){
        		  $(this).html(smstraight());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('lg')){
        		  $(this).html(lgstraight());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('yatzee')){
        		  $(this).html(yahtzee());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
        		    $('.warning').html('');
        		    turnOver=true;
        	}
        	if($(this).hasClass('chance')){
        		  $(this).html(chance());
        		    $(this).css('color','black');
        		    $(this).attr('class','chosen');
        		    turns=3;
                    $('.warning').html('');
        		    turnOver=true;
        	}
               
        alert("there are "+ rounds + " left");
     if(turnOver==true){
          //removes other scores if not selected and resets counters back to zero
     
       	  rounds--;
          $('.score').html('');
         $('.button2').prop("disabled",false);
         $('.die').css('border','');
          ones=0;
          twos=0;
          threes=0;
          fours=0;
          fives=0;
          sixes=0;
	
	     $('.die').empty();
}
 else{
        	$('.warning').html('select another category for points or a zero');
        }
        });
       
     

  });


}

category();

 
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

 
	  
	
//add error messages,
//add adding of scores at end of game	

//error for when categories are clicked and was not rolled again

 



 
});
