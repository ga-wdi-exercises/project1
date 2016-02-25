firstGuess=null
secondGuess=null
function compare(){
  if(firstGuess === secondGuess){
    alert("You guessed right!");
    }else {alert("Nope!");}
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



///=========scratchpad======///
    /*

if(whichClickAreWeOn === 1){
  whichClickAreWeOn ++;
  }
if(whichClickAreWeOn === 2){
  //secondGuess=
  //console.log("You guessed " + secondGuess);
  //compare click1 and click2
  //if click1===click2{Success!}
  //else{code for failure}

whichClickAreWeOn =1;

}
  });
} */
