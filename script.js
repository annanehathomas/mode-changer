var toggled = false;

var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var text = document.getElementById("text");
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function(){

  if(!toggled){
    text.textContent = "Good Night!"
    text.classList.add("color-white");
    bodyTag.classList.add("bg-night");
    bodyTag.classList.remove("bg-day");
    circle.classList.add("sliding");

    toggled = true;
  }

  else{
    text.textContent ="Good Morning!"
    text.classList.remove("color-white");
    bodyTag.classList.add("bg-day");
    bodyTag.classList.remove("bg-night");
    circle.classList.remove("sliding");

    toggled = false;
  }
}