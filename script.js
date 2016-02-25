function trivia(){
var question1 = document.querySelector(".question");
var optionA1 = document.getElementById("optionA");
var optionB1 = document.getElementById("optionB");
var optionC1 = document.getElementById("optionC");
var optionD1 = document.getElementById("optionD");
var correctAnswer1 = document.querySelector(".correctAnswer");
//var incorrectAnswer1 = document.querySelector(".incorrectAnswer");
//var arrayLength = question1.length;
i = 0;
score = 0;

question = ["ROUND 1", "Which actor has a game based </br> off connecting any celebrity</br> to him in 6 degrees?", "For which role did </br> Leonardo DiCaprio </br> win an Oscar?", "Which movie has </br> won the </br> most Oscars?", "Which of these </br> actors has not </br> received an EGOT?", "Which movie </br> is not </br> based off a book?", "ROUND 2", "Who has hosted </br> Saturday Night Live </br> the most times?", "Who has been banned from <br> SNL?", "Who has not </br> been an anchor on </br> Weekend Update?", "Who was not part of <br> the original SNL cast?", "Who was been a SNL </br> cast member the longest?", "ROUND 3",
"Who is singer Elle King's </br> famous father?", "Which of the following </br> fellas did not date </br> Taylor Swift?", "Who is Gwen Stefani's </br> current beau?", "What diet plan is Oprah </br> currently following?", "Who broke up with their </br> ex by ghosting them?"];
optionA = ["Press to Play", "Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix", "Press to Play", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Press to Play", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];
optionB = ["", "Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire", "", "Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson", "", "Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift"];
optionC = ["", "Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect", "", "John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers", "", "Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer"];
optionD = ["", "Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard", "", "Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen", "","Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry"];
correctAnswer = ["", "Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix", "", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];

function questionAnswers(i){
  question1.innerHTML = question[i];
  question1.setAttribute("data-index", i);
  optionA1.innerHTML = optionA[i];
  optionB1.innerHTML = optionB[i];
  optionC1.innerHTML = optionC[i];
  optionD1.innerHTML = optionD[i];
}

optionA1.addEventListener("click", next);
optionB1.addEventListener("click", next);
optionC1.addEventListener("click", next);
optionD1.addEventListener("click", next);

function next (){
  console.log(this.classList.contains("correctAnswer"));
  var index =parseInt( question1.getAttribute("data-index"));
  questionAnswers(1 + index);
   document.getElementById("demo").innerHTML = "";
  }


  for( i = 0; i < foods[0].length; i++){
    console.log("I want to eat a " + foods[0][i]);
  }

  function basicPopup(url) {
  popupWindow = window.open(url,'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
  	}

function rightAnswer(){
  if (answerOptions == "correctAnswer");
  optionA[i] = ("You got it right!");
  window.open("https://github.com/ga-wdi-exercises/project1");
}

questionAnswers(i)
}
trivia()
