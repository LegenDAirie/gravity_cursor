'use strict';

// ;(function () {

  /* PRETTY MUCH A METATABLE FROM LUA */
  var GAME_PROTOTYPE = {
    start: function () {
      setInterval(this.tick.bind(this), 1000/60);
    },
    tick: function () {
      // console.log('game tick');
      this.balls.forEach(function (ball) {
        ball.draw()
      })
    }
  }

  /* GAME CLASS" */
  var Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE);

      /* INITIALIZATION CRAP */
      game.balls = [Ball.createRandom(), Ball.createRandom(), Ball.createRandom()]

      return game;
    }
  }

// })()
