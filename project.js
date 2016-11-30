//generate a random word to compare users letter choices to
//put that word into a variable
//this function does not work url no good********
/*function RandomWord() {
    var requestStr = "http://randomword.setgetgo.com/get.php";

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
    });
}*/
var url = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5/?t=";

$.ajax({
    url: url,
    type: "GET",
    dataType: "json",
}).done(function(response){
        $('h1').html(response.data.Word);/*('something happened');*/
    });

function RandomWordComplete(data) {
    alert(data.Word);
}
/*
//test - did not work**************
var choosenWord = (data.Word);
//****Need to look at above and assign the data.word which was the path
//to follow with above api to work with the below variables - not so wordy
console.log(choosenWord);*/

//need the variables will use in functions
//variable to assign random word to

var questionBank/*data.Word*/ = new [];
//variable to place individual letters into - an array - will need to split(Python methos) and place letters here
var wordArray = new [];
//an array for choosenletters which will use to black out letter
var previousWordChoices = new [];
//for number of chances have till hung
/*var livesLeft = 6;
//for remaining letters to pick
var lettersRemaining = Word.Length;
//a test word to start
var word = 'tryout';
//?Displayed Word
var wordDisplay = '';*/
var currentWord;

var currentClue;

var wrongAnswerCount;


//start creatinf functions

function useWord(){

};

function(){

};

function(){

};

function(){

};

//give user a choose of letters - done w/css/html - need onClick to assign letter as variable
//to compare to the variables created after random word is generated
a.addEventListener
//if letter is a match show in a board - flip hidden letter
//if not have count down to being hung
//when count down reaches zero present a gif from Hang em High


//need a reset button to reload page
