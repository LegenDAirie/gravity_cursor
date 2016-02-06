'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var GAME_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/60);
    },
    tick: function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // console.log('game tick');
      this.balls.forEach(function (ball) {
        ball.move()
        ball.draw()
      })
    }
  }

  /* GAME CLASS" */
  var Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE);

      /* INITIALIZATION CRAP */
      game.balls = []
      for (var i = 0; i < 200; i ++) {
        game.balls[i] = Ball.createRandom()
      }


      return game;
    }
  }

// })()
