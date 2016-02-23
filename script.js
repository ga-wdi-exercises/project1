firstClick =
secondClick =
whichClickAreWeOn = 1


var select = document.querySelectorAll(".clickable");
console.log(select);

for (var i=0;i<select.length;i++){
  select[i].addEventListener("click",function(){
    console.log(this.getAttribute("name"));

if(whichClickAreWeOn === 1){
  console.log("clickOne");
  whichClickAreWeOn ++;
  }
if(whichClickAreWeOn === 2){
  console.log("clickTwo");
  //compare click1 and click2
  //if click1===click2{Success!}
  //else{code for failure}

whichClickAreWeOn ===1;







}
  });
}
