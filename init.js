'use strict';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var canvas = document.getElementById("canvas");
canvas.setAttribute('height', HEIGHT);
canvas.setAttribute('width', WIDTH);

var context = canvas.getContext('2d');

var game = Game.create()
game.start()

// var t = 0;
// var INTERVAL = 1000 / 60; // milliseconds
// var x = WIDTH / 2;
// var y = HEIGHT / 2;
// var radius = 20;

// function drawStuff() {
//   t += INTERVAL / 1000;
//   var f = 1 / 4;
//
//   /* sin(2 * pi * t * f) */
//   x = (WIDTH / 2) + (WIDTH / 2) * Math.sin(2 * Math.PI * t * f);
//   //clear old content
//   context.clearRect(0, 0, canvas.width, canvas.height);
//
//   shapeMaker.drawCircle(x, y, radius);
// }


// setInterval(drawStuff, INTERVAL);
