//generate a random word to compare users letter choices to
//put that word into a variable
function RandomWord() {
    var requestStr = "http://randomword.setgetgo.com/get.php";

    $.ajax({
        type: "GET",
        url: requestStr,
        dataType: "jsonp",
        jsonpCallback: 'RandomWordComplete'
    });
}

function RandomWordComplete(data) {
    alert(data.Word);
}

var choosenWord =

//give user a choose of letters
//if letter is a match show in a board
//if not have count down to being hung
//when count down reaches zero present a gif from Hang em High
