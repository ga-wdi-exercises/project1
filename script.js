$(document).ready(function(){

firstGuess=null
secondGuess=null

function compare(){
  if(firstGuess === secondGuess){
    alert("You got it! Good job!");
  }else {alert("Nope! Try again! ");}
  }
//++++++++++++
var select = document.querySelectorAll(".clickable");
console.log(select);

for (var i=0; i<select.length; i++){
  select[i].addEventListener("click",function(){
    //console.log(this.getAttribute("name"));
      if (firstGuess == null){
    firstGuess=this.getAttribute("name");
    console.log("Your first guess is "+ firstGuess);}
      else{
        secondGuess=this.getAttribute("name");
        console.log("your second guess is "+secondGuess);
//++++++call compare function (global) ++++++ //
            compare();
//++++now, get how cool this is! Reset your variables so you can do it over and over!
  firstGuess = null;
  secondGuess = null;
  } // caps the else function.
}) // caps the eventListener function
}//caps the hole for loop that sets the "this" and the for/eventListener function.

});
