firstClick =
secondClick =
whichClickAreWeOn = 1


var select = document.querySelectorAll(".clickable");
console.log(select);

for (var i=0;i<select.length;i++){
  select[i].addEventListener("click",function(){
    console.log(this.getAttribute("name"));

if(whichClickAreWeOn == 1){
  whichClickAreWeOn == 2
}












whichClickAreWeOn =1;

  });
}
