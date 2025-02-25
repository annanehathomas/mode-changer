var toggled = false;

var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var text = document.getElementById("text");
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function(){

  if(!toggled){
    text.classList.add("color-white");
    bodyTag.classList.add("bck-color-black");
    circle.classList.add("sliding");

    toggled = true;
  }

  else{
    text.classList.remove("color-white");
    bodyTag.classList.remove("bck-color-black");
    circle.classList.remove("sliding");

    toggled = false;
  }
}