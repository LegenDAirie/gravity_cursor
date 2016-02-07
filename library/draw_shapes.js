'use strict';

// (function() {

  var shapeMaker = {
    drawCircle: function(x, y, radius, color) {
      context.beginPath();
      context.lineWidth = 2;

      context.fillStyle = color;

      context.arc(
        x, // x
        y, // y
        radius, // radius
        0, // start angle
        2 * Math.PI, // end angle
        false // counter clockwise?
      );

      context.stroke();
      context.fill();
    }
  }

// })()
