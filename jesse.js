var round1 =     {
  title: "TV & Movies",
  questions: [
    {
      text: "Here is the question",
      options: [
        "1", "2", "3","4"
      ],
      correct: 0
    }
  ]
}
trivia = {
  score: 0,
  rounds: [round1, round2, round3]
}
for (var i=0; i < trivia.rounds.length; i++) {
  var round = trivia.rounds[i];
  console.log(round.title);
  round.questions.forEach(function(question){
    console.log(question.text);
    question.options.forEach(function(option){
      console.log(option.text);
    })
    var answer = prompt("Pick one.")
    if (answer == question.options[question.correct]) {
      alert("CORRECT");
      trivia.score++
    }
        else {
          alert("WRONG")
        }
  })
}
