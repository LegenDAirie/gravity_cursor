'use strict';

// (function() {

  var MAX_SPEED = 2; // pixels per frame

  var BALL_PROTOTYPE = {
    /* write any methods that you want all instances to have here */
    /* instance methods */
    move: function() {
      // ball.acceleration.x += force.x;
      // ball.acceleration.y += force.y;

      this.velocity.x += this.acceleration.x;
      this.velocity.y += this.acceleration.y;

      this.location.x += this.velocity.x;
      this.location.y += this.velocity.y;
    },

    outOfBounds: function() {
     return (
       this.location.x - this.radius > WIDTH ||
       this.location.x + this.radius < 0 ||
       this.location.y - this.radius > HEIGHT ||
       this.location.y + this.radius < 0
     )
    },

    wrap() {
      var rightOfScreen = this.location.x - this.radius > WIDTH
      var leftOfScreen = this.location.x + this.radius < 0
      var belowScreen = this.location.y - this.radius > HEIGHT
      var aboveScreen = this.location.y + this.radius < 0

      if (rightOfScreen) {
        this.location.x = this.location.x - (WIDTH + 2 * this.radius)
      } else if (leftOfScreen) {
        this.location.x = this.location.x + (WIDTH + 2 * this.radius)
      } else if (belowScreen) {
        this.location.y = this.location.y - (HEIGHT + 2 * this.radius)
      } else if (aboveScreen) {
        this.location.y = this.location.y - (HEIGHT + 2 * this.radius)
      }
    },

    draw: function() {
      shapeMaker.drawCircle(this.location.x, this.location.y, this.radius);
    }
  }

  var Ball = {
    create: function(location, velocity, radius) {
      var ball = Object.create(BALL_PROTOTYPE);

      ball.location = location;
      ball.velocity = velocity;
      ball.acceleration = {x: 0, y: 0}
      ball.radius = radius || 20;

      return ball;
    },
    /* class methods */
    createRandom: function () {
      var location = {
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT
      };

      var speed = Math.random() * MAX_SPEED;
      var direction = Math.random() * 2 * Math.PI;
      var velocity = {
        x: speed * Math.cos(direction),
        y: speed * Math.sin(direction)
      };

      var radius = Math.random() * 30;

      return Ball.create(location, velocity, radius);
    }
  }

// })()
