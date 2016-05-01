function trivia(){
  var categories;
  var showCategories = document.getElementById("category");
  var showScore = document.getElementById("myscore");
  var question1 = $(".question");
  // var question1 = document.querySelector(".question");
  // var optionA1 = $("#optionA");
  // var optionA1 = document.getElementById("optionA");
  // var optionB1 = document.getElementById("optionB");
  // var optionC1 = document.getElementById("optionC");
  // var optionD1 = document.getElementById("optionD");
  // var correctAnswer1 = document.querySelector(".correctAnswer");
  // var incorrectAnswer1 = document.querySelector(".incorrectAnswer");
  // var options = document.querySelectorAll(".answerOptions");
  // console.log(options);
  //var arrayLength = question.length;
  //var playerselection = []
  i = 0;
  score = 0

// Show Category
  var selectCategory = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "Round 1: TV & Movies";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "Round 2: Saturday Night Live";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "Round 3: Celebrity Gossip";
    }  else if (chosenCategory === categories[3]) {
        categoryName.innerHTML = "Round 4: Celebrity Gossip";
    } else if (chosenCategory === categories[4]) {
        categoryName.innerHTML = "Round 5: Celebrity Gossip";
  }

// Show Guesses
 result = function () {
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (word[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    }

    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}


// Show Score
  comments = function () {
   showLives.innerHTML = "You have " + score + " score";
   if (score < 1) {
     showLives.innerHTML = "Game Over";
   }
   for (var i = 0; i < guesses.length; i++) {
     if (counter + space === guesses.length) {
       showLives.innerHTML = "You Win!";
     }
   }
 }


  // question = 
  category =
  ["ROUND 1 </br> TV & Movies", "Which actor has a game based </br> off connecting any celebrity</br> to him in 6 degrees?", "For which role did </br> Leonardo DiCaprio </br> win an Oscar?", "Which movie has </br> won the </br> most Oscars?", "Which of these </br> actors has not </br> received an EGOT?", "Which movie </br> is not </br> based off a book?", "ROUND 2 </br> Saturday Night </br> Live", "Who has hosted </br> Saturday Night Live </br> the most times?", "Who has been </br> banned from <br> SNL?", "Who has not </br> been an anchor on </br> Weekend Update?", "Who was not </br> part of the <br> original SNL cast?", "Who was been a SNL </br> cast member the longest?", "ROUND 3 </br> Celebrity </br> Gossip",
  "Who is singer Elle King's </br> famous father?", "Which of the following </br> fellas did not date </br> Taylor Swift?", "Who is Gwen Stefani's </br> current beau?", "What diet plan is Oprah </br> currently following?", "Who broke up with their </br> ex by ghosting them?", "GAME OVER"];
  // optionA =
  ["Press to Play","Kevin Bacon", "None of these options", "Titanic", "Kate Winslet", "Matrix", "Press to Play", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Press to Play", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];
  // optionB =
  ["", "Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire", "", "Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson", "", "Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift", ""];
  optionC = ["", "Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect", "", "John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers", "", "Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer",""];
  // optionD =
  ["", "Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard", "", "Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen", "","Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry",""];
  // correctAnswer =
  ["Kevin Bacon", "None of these options", "Titanic", "Kate Winslet", "Matrix", "", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];

  chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();

      guesses = [ ];
      score = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCategory();
      canvas();
    }



  // function questionAnswers(i){
  //   question1.html(question[i]);
  //   question1.attr("data-index", i);
  //   optionA1.innerHTML = optionA[i];
  //   optionB1.innerHTML = optionB[i];
  //   optionC1.innerHTML = optionC[i];
  //   optionD1.innerHTML = optionD[i];
  // }

//   optionA1.addEventListener("click", function () {
//     if (this.classList.contains("correctAnswer")) {
//       if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
//         score++;
//         alert("Good Job!");
//         next();
//       }
//     }
//   });
//   optionB1.addEventListener("click", function () {
//     alert("Sorry, you got it wrong!");
//     next();
//     if (this.classList.contains("correctAnswer")) {
//       if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
//         score++;
//       }
//     }
//   });
//   optionC1.addEventListener("click", function () {
//     alert("Sorry, you got it wrong!");
//     next();
//     if (this.classList.contains("correctAnswer")) {
//       if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
//         score++;
//       }
//     }
//   });
//   optionD1.addEventListener("click", function () {
//     alert("Sorry, you got it wrong!");
//     next();
//     if (this.classList.contains("correctAnswer")) {
//       if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
//         score++;
//       }
//     }
//   });
//
//   function next (){
//     //  console.log(this.classList.contains("correctAnswer"));
//     var index =parseInt( question1.attr("data-index"));// question1.dataset.index
//     if (question.length == index) {
//       alert("Game Over");
//     } else {
//       questionAnswers(1 + index);
//     }
//   }
//   questionAnswers(i)
// }
trivia()

// Show lives
 comments = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (var i = 0; i < geusses.length; i++) {
    if (counter + space === geusses.length) {
      showLives.innerHTML = "You Win!";
    }
  }
}
