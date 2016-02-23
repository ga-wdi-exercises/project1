var count=30;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; 
}
    $('.instructions').click(function() {
      $('.playButton').fadeOut('fast', 1.00);
    });
});
