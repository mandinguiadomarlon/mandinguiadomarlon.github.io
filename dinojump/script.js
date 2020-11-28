//function to call jump animation to dino
function jump(){
  if(document.getElementById("dino").classList != "animate"){
    document.getElementById("dino").classList.add("animate");
  }
  setTimeout(function(){
    document.getElementById("dino").classList.remove("animate");
  },500);
}

//function to check if dino collides with the block
var checkDead = setInterval(function(){
  var dinoTop = parseInt(window.getComputedStyle(document.getElementById("dino")).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(document.getElementById("block")).getPropertyValue("left"));
  var i = 0;
  var show;
  var score = document.getElementById("score");
  var stop;

  function increment(){
    i += 1;
  }

  function myfunc(){
    show = setInterval(increment, 2000);
  }

  if(blockLeft<30 && blockLeft>0 && dinoTop>=130){
    document.getElementById("block").style.animation = "none";
    document.getElementById("block").style.display = "none";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("container").style.backgroundImage = "url(background.png)";
  }

  if (document.getElementById("overlay").style.display == "block")
  {
    clearInterval(show);
  }
  else {
    myfunc();
    $("#score").html("SCORE: " + show);
  }
},10);

//to reload page after game over
$(document).ready(function(){
  $("#restart").click(function(){
    window.location.reload();
  });
});

//function to detect if up arrow is clicked, then call jump()
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '38') { //up arrow
    jump();
  }
}
