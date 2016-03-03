$(document).ready(function(){

  firstGuess=null
  secondGuess=null

  function compare(){
    if(firstGuess === secondGuess){
      alert("You got it! Good job!");
    }else {alert("Nope! Try again! ");}
  }
  //++++++++++++
  var select = document.querySelectorAll(".clickable");
  console.log(select);

  for (var i=0; i<select.length; i++){
    select[i].addEventListener("click",function(){
      //console.log(this.getAttribute("name"));
      if (firstGuess == null){
        firstGuess=this.getAttribute("name");
        console.log("Your first guess is "+ firstGuess);}
        else{
          secondGuess=this.getAttribute("name");
          console.log("your second guess is "+secondGuess);
          //++++++call compare function (global) ++++++ //
          compare();
          //++++now, get how cool this is! Reset your variables so you can do it over and over!
          firstGuess = null;
          secondGuess = null;


























// var wdiNames = ["Adrian", "Alexa", "Andrew", "Anissa","Becky","Brendan","Caitlin","Charles","Christine","Clarissa","Craig","Farishta","Isaac","Jeffrey","Joe","John","Keith","Lyndsey","Matt","Melissa","Mohamed","Patrick","Robel"
// ,"Robin","Sanjaya","Toni","Vijay","Winisha","Adam","Bipin","Brian","Brittany","Casey","Fatai","Hilary","Jesse","Kabir","Kaira","Kimberly","Matthew","Maureen","Nick","Nyron","Ryan"];
//
// wdiNames.forEach(function(name){
//   var card = document.createElement("div");
//   card.innerHTML=name;
//   card.class
//   document.body.appendChild(card);
//   console.log(name);
// })
// };
// var randomName = wdiNames[Math.floor(Math.random() * wdiNames.length)];
//
// var NameTags = document.querySelectorAll(".NameTags");
// i=0;
// function generateNames(i){
//   NameTags.innerHTML=randomName[i];
//   generateNames();
// }
