//x, y, width, height

var canvas = document.getElementById("obama_flag");
var context = canvas.getContext("2d");
context.beginPath();
context.fillStyle = "red";
context.fillRect(200, 200, 200, 500);
context.fillStyle = "white";
context.arc(100, 100, 100, 0, Math.PI*2, false);
context.fill()


var canvas = document.getElementById("bolsonaro_flag");
var context = canvas.getContext("2d");
context.beginPath();
context.fillStyle = "yellow";
context.fillRect(200, 200, 200, 500);


context.fillStyle = "blue";
context.arc(400, 100, 100, 0, Math.PI*2, false);
context.fill();

context.fillStyle = "blue";
context.lineTo(500,200);
context.lineTo(450,350);
context.lineTo(350,200);
context.lineTo(550,150);
context.fill();
