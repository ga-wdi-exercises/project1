$(document).ready(function(){
  function firstNameBasis(){
    var firstGuess=null;
    var secondGuess=null;
    var select = document.querySelectorAll(".clickable");
    function compare(){
      if(firstGuess === secondGuess){
        alert("You got it! Good job!");
      }else {
        alert("Nope! Try again! ");
      }
    }
    for (var i=0; i<select.length; i++){
      select[i].addEventListener("click",function(){
        if(firstGuess == null){
          firstGuess=this.getAttribute("name");
        }else{
          secondGuess=this.getAttribute("name");
          compare();
          firstGuess = null;
          secondGuess = null;
        }
      })
    }
  }
  firstNameBasis();
});
