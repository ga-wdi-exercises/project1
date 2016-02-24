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

question = ["Which actor has a game based off connecting other celebrities to him in 6 degrees?", "Leonardo DiCaprio won an Oscar for which role?", "Which movie was nominated for the most Oscars?", "Which of these actors has not received an EGOT?", "Which movies is not based off a book?", "Who has hosted Saturday Night Live the most times?", "Who has been banned from SNL?", "Who has not been an anchor on Weekend Update?", "Who was not part of the original SNL cast?", "Who was been a SNL cast member the longest?",
"Who is singer Elle King's famous father?", "Which of the following fellas did not date Taylor Swift?", "Who is Gwen Stefani's current beau?", "What diet plan is Oprah currently following?", "Who broke up with their ex by ghosting them?"];
optionA = ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];
optionB = ["Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire", "Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson", "Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift"];
optionC = ["Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect", "John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers", "Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer"];
optionD = ["Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard"], ["Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen"], ["Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry"];
correctAnswer = ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];

function questionAnswers(){
  question1.innerHTML = question[i];
  optionA1.innerHTML = optionA[i];
  optionB1.innerHTML = optionB[i];
  optionC1.innerHTML = optionC[i];
  optionD1.innerHTML = optionD[i];
}


question1.addEventListener("click", next);
optionA1.addEventListener("click", next);
optionB1.addEventListener("click", next);
optionC1.addEventListener("click", next);
optionD1.addEventListener("click", next);

function next (){
for (i = 0; i < question1.length; i++) {
  if (question1[i] === 15) {
    break;
  }
}
}

//correctAnswer1.addEventListener("click", next);

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
//end of round 3 & game
//prompt outcome//
