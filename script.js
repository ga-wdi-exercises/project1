function trivia() {
var questions =
["Which actor has a game based off connecting other celebrities to him in 6 degrees?", "Leonardo DiCaprio won an Oscar for which role?", "Which movie was nominated for the most Oscars?", "Which of these actors has not received an EGOT?", "Which movies is not based off a book?"],
["Who has hosted Saturday Night Live the most times?", "Who has been banned from SNL?", "Who has not been an anchor on Weekend Update?", "Who was not part of the original SNL cast?", "Who was been a SNL cast member the longest?"],
["Who is singer Elle King's famous father?", "Which of the following fellas did not date Taylor Swift?", "Who is Gwen Stefani's current beau?", "What diet plan is Oprah currently following?", "Who broke up with their ex by ghosting them?"]

optionA:["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"], ["Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond"], ["Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"]

optionB: ["Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire"], ["Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson"], ["Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift"]

optionC: ["Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect"], ["John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers"], ["Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer"]

optionD: ["Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard"], ["Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen"], ["Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry"]

Correctanswer: ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"], ["Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond"], ["Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"]

var instructions = document.getElementsByClassName(".instructions")
var question = document.getElementsByClassName(".question")
var optionA = button.getElementById(".optionA")
var optionB = button.getElementById(".optionB")
var optionC = button.getElementById(".optionC")
var optionD = button.getElementById(".optionD")
var Correctanswer = document.querySelector(".answer")
var playButton = document.getElementById(".playbutton")


optionA.addEventListener("onclick"displayDate())
optionB.addEventListener("click", changeWhite )
optionC.addEventListener("click", changeBlue )
optionD.addEventListener("click", changeYellow )

function hide(){
  button.body.style.backgroundColor = "red"
  button.body.style.color = "white"
}
