function trivia(){
//var instructions = document.getElementsByClassName(".instructions")
var question1 = document.querySelector(".question");
var optionA1 = document.getElementById("optionA");
var optionB1 = document.getElementById("optionB");
var optionC1 = document.getElementById("optionC");
var optionD1 = document.getElementById("optionD");
var correctAnswer1 = document.querySelector(".correctAnswer");
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
  question1.innerHTML = question[i];
  optionA1.innerHTML = optionA[i];
  optionB1.innerHTML = optionB[i];
  optionC1.innerHTML = optionC[i];
  optionD1.innerHTML = optionD[i];
}

// function next (){
// for (i = 0; i < question.length; i++) {
//   if (question[i] == 5) {
//     break;
//   }
// }
// }

// question1.addEventListener("click", next);
// optionA1.addEventListener("click", next);
// optionB1.addEventListener("click", next);
// optionC1.addEventListener("click", next);
// optionD1.addEventListener("click", next);
// correctAnswer1.addEventListener("click", next);

// show correct answer in green & incorrect in red//
// }
// function (correctAnswer){
//  button.body.style.backgroundColor = green
// }
// function(incorrectAnswer){
//    button.body.style.backgroundColor = red
questionAnswers()
next()
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
