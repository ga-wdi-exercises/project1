$(document).ready(function(){

function firstNameBasis(){
  var firstGuess=null;
  var secondGuess=null;
    function compare(){
      if(firstGuess === secondGuess){
        alert("You got it! Good job!");
      }else {
        alert("Nope! Try again! ");
      }
    }
var select = document.querySelectorAll(".clickable");

for (var i=0; i<select.length; i++){
  select[i].addEventListener("click",function(){
      if (firstGuess == null){
    firstGuess=this.getAttribute("name");
    console.log("Your first guess is "+ firstGuess);}
      else{
        secondGuess=this.getAttribute("name");
        console.log("your second guess is "+secondGuess);

            compare();

  firstGuess = null;
  secondGuess = null;
  }
})
}
}firstNameBasis();
});
