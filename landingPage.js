document.getElementsByTagName("h1")[0].style.fontSize = "80px";

function getRandomColors(){
  var randcolors = [];
  for(var i=0; i<3; i ++)
  {
    randcolors.push(Math.ceil(Math.random()* 256));
  }
  return randcolors;
}

function changeBodyBackgroundColor() {
  var colors = getRandomColors();
  var backgroundcolor = "rgba("+colors[0]+","+colors[1]+","+colors[2]+",.6"+")";
  $("body").css("background-color", backgroundcolor);
}

setInterval(function(){
  changeBodyBackgroundColor();
}, 3500); 