'use strict';

// (function() {

  var Vector = {
    magnitude: function(vector) {
      var x = vector.x;
      var y = vector.y;

      return Math.sqrt(x*x + y*y);
    },

    normalize: function(vector) {
      var magnitude = Vector.magnitude(vector);

      return {
        x: vector.x / magnitude,
        y: vector.y / magnitude
      }
    }
  };

// })()
