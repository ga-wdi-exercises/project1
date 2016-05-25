$(document).ready(function(){
  firstGuess=null
  secondGuess=null
  function compare(){
    if(firstGuess === secondGuess){
      alert("You got it! Good job!")
    } else {
      alert("Nope! Try again! ")
    };
  };
  var select = document.querySelectorAll(".clickable")

  for (var i=0; i<select.length; i++){
    select[i].addEventListener("click",function(){
      if (firstGuess == null){
        firstGuess=this.getAttribute("name")
      } else {
        secondGuess=this.getAttribute("name")
      };
      compare();
  };
  firstGuess = null;
  secondGuess = null;
