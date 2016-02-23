var instructions = document.getElementsByClassName(".instructions")
var question = document.getElementsByClassName(".question")
var optionA = button.getElementById(".optionA")
var optionB = button.getElementById(".optionB")
var optionC = button.getElementById(".optionC")
var optionD = button.getElementById(".optionD")
var Correctanswer = document.querySelector(".answer")
var platButton = document.getElementById(".playbutton")


optionA.addEventListener("onclick"displayDate())
optionB.addEventListener("click", changeWhite )
optionC.addEventListener("click", changeBlue )
optionD.addEventListener("click", changeYellow )

function hide(){
  button.body.style.backgroundColor = "red"
  button.body.style.color = "white"
}
