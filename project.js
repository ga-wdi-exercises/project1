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

//this function does not work url no good********gave up on this shit can not get any api to upload - it goes through but captures nothing
/*var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=54f479be-96d5-41ea-a17b-53df7b63ccf4/";

$.ajax({
    url: url,
    type: 'GET',
    dataType: 'XML',
}).always(function(){
      console.log('something happened');
    });*/


/*done(function(response){
        $('h1').html(response.data.Word);/*('something happened');*/
    //});

/*function RandomWordComplete(data) {
    alert(data.Word);
}

//test - did not work**************
var choosenWord = (data.Word);
//****Need to look at above and assign the data.word which was the path
//to follow with above api to work with the below variables - not so wordy
console.log(choosenWord);*/

//need the variables will use in functions
//variable to assign random word to

var wordListBank/*data.Word*/ = [];
//variable to place individual letters into - an array - will need to split(Python methos) and place letters here
var newArray = [];
//an array for choosenletters which will use to black out letter
var previousWordChoices = [];
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


//start creating functions
$(document).ready (function(){
  $.getJSON('wordlist.json', function(data) {
    for(i=0; i<wordlist.length; i++){
      wordListBank[i] = newArray;
      wordListBank[i][0] = wordlist[i].word;
      wordListBank[i][1] = wordlist[i].clue;
      }
      alert(wordListBank);
    });
});

//functions below will become nested in the ready function above once completed
/*function useWord(){

};

function(){

};

function(){

};

function(){

};*/

//give user a choose of letters - done w/css/html - need onClick to assign letter as variable
//to compare to the variables created after random word is generated
//a.addEventListener
//if letter is a match show in a board - flip hidden letter
//if not have count down to being hung
//when count down reaches zero present a gif from Hang em High


//need a reset button to reload page
