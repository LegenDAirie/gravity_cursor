'use strict';

// (function() {

  var BALL_PROTOTYPE = {
    /* write any methods that you want all instances to have here */
    /* instance methods */
    move: function() {
      // ball.acceleration.x += force.x
      // ball.acceleration.y += force.y

      this.velocity.x += this.acceleration.x
      this.velocity.y += this.acceleration.y

      this.location.x += this.velocity.x
      this.location.y += this.velocity.y
    },

    draw: function() {
      shapeMaker.drawCircle(this.location.x, this.location.y, this.radius);
    }
  }

  var Ball = {
    create: function(x, y, radius) {
      var ball = Object.create(BALL_PROTOTYPE)

      ball.location = {x: x, y: y}
      ball.velocity = {x: 0, y: 0}
      ball.acceleration = {x: 0, y: 0}
      ball.radius = radius || 20;

      return ball
    },
    /* class methods */
    createRandom: function () {
      var x = Math.random() * WIDTH
      var y = Math.random() * HEIGHT
      var radius = Math.random() * 30

      return Ball.create(x, y, radius);
    }
  }

  // ball = Ball.create(500, 200, 40)
  // ranomBall = Ball.createRandom()
  //
  // balls = [ball, randomBall]
  // balls.forEach(function (ball) {
  //   ball.move()
  //   ball.draw()
  // })

// })()
