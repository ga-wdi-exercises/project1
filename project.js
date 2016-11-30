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
    type: "GET",
    url: url,
    dataType: "json",
}).done(function(response){
        $('h1').html(data.Word);/*('something happened');*/
    });

function RandomWordComplete(data) {
    alert(data.Word);
}
/*
//test - did not work**************
var choosenWord = (data.Word);

console.log(choosenWord);*/

//give user a choose of letters - done w/css/html - need onClick to assign letter as variable
//to compare to the variables created after random word is generated
a.addEventListener
//if letter is a match show in a board - flip hidden letter
//if not have count down to being hung
//when count down reaches zero present a gif from Hang em High


//need a reset button to reload page
