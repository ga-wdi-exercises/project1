$(document).ready(function(){
  var firstNameBasis={
    firstGuess:null,
    secondGuess:null,
    select:document.querySelectorAll(".clickable"),

    confirm:function(){
      if(this.firstGuess === this.secondGuess){
        alert("You got it! Good job!");
      }else{
        alert("Nope! Try again!");
      }
    },
    compare:function(name){
      if(this.firstGuess == null){
        this.firstGuess=name;
      }else{
        this.secondGuess=name;
        this.confirm();
        this.firstGuess = null;
        this.secondGuess = null;
      }
    },
    activateBoard:function(){
      var self=this;
      for (var i=0; i<this.select.length; i++){
        this.select[i].addEventListener("click",function(){
          self.compare(this.getAttribute("name"));
        })
      }
    }
  }
  firstNameBasis.activateBoard();
});
