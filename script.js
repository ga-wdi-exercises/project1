function trivia(){
//var instructions = document.getElementsByClassName(".instructions")
var question = document.getElementsByClassName('question');
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var correctAnswer = document.querySelector(".correctAnswer");
//var playButton = document.getElementById(".playbutton")
//var score = document.getElementById(".score")
//score = 0;
i = 0;
//var timer = document.querySelector(".timer")
//var p1 = document.getElementById(".p1")
//var b1 = document.getElementById(".b1")

question = ["Which actor has a game based off connecting other celebrities to him in 6 degrees?", "Leonardo DiCaprio won an Oscar for which role?", "Which movie was nominated for the most Oscars?", "Which of these actors has not received an EGOT?", "Which movies is not based off a book?"];
optionA = ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"];
optionB = ["Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire"];
optionC = ["Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect"];
optionD = ["Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard"];
correctAnswer = ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"];

function questionAnswers(){
  question.innerHTML = question[i];
  optionA.innerHTML = optionA[i];
  optionB.innerHTML = optionB[i];
  optionB.innerHTML = optionC[i];
  optionD.innerHTML = optionD[i];
}

function next (){
for (i = 0; i < question.length; i++) {
  if (question[i] == 5) {
    break;
  }
}
}
questionAnswers()
}
trivia()
//round 2 start//
//for (i = 0; i < a.length; i++) {
//  if (a[i] == theValue) {
//    break;
//  }
//}
//end round 2//
//start round 3//
//for (i = 0; i < a.length; i++) {
//  if (a[i] == theValue) {
//    break;
//  }
//}
//end of round 3 & game

//prompt outcome//






//add eventlisteners//
//figure out function to provide
//question.addEventListener("onload", startTimer)
//optionA.addEventListener("onclick", changeGreen);
//optionB.addEventListener("click", hide);
//optionC.addEventListener("click", hide);
//optionD.addEventListener("click", changeYellow);
//correctAnswer.addEventListener("onclick", changeGreen);

//show correct answer in green & incorrect in red//
//}
//function (correctAnswer){
//  button.body.style.backgroundColor = green
//}
//function(incorrectAnswer){
//    button.body.style.backgroundColor = red
//}
