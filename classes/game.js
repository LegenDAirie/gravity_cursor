'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var GAME_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/60);
      canvas.addEventListener("mousemove", this.updateMouseLocation.bind(this));
    },

    tick: function () {
      var self = this;

      context.clearRect(0, 0, canvas.width, canvas.height);

      this.balls.forEach(function (ball) {
        ball.move(self.gravitationalAccelerationForLocation.bind(self));
        ball.wrap();
        ball.draw();
      })
    },

    updateMouseLocation: function(event) {
      this.mouseLocation = {
        x: event.x,
        y: event.y
      };
    },

    gravitationalAccelerationForLocation: function (location) {
      if (!this.mouseLocation) { return {x: 0, y: 0} }

      var dx = this.mouseLocation.x - location.x;
      var dy = this.mouseLocation.y - location.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      var direction = {
        x: dx / distance,
        y: dy / distance
      };

      var magnitude;
      if (distance > 10) {
        magnitude = 1 / distance;
      } else {
        magnitude = 1 / 10;
      }

      return {
        x: magnitude * 10 * direction.x,
        y: magnitude * 10 * direction.y
      };
    }
  }

  /* GAME CLASS" */
  var Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE);

      /* INITIALIZATION CRAP */
      game.balls = []
      for (var i = 0; i < 20; i ++) {
        game.balls[i] = Ball.createRandom()
      }


      return game;
    }
  }

// })()
