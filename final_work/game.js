'use strict';

(() => {
  const game = () => {
    const countBalls = {
      player: 5,
      computer: 5,
    };

    const getRandomIntInclusive = (min, max) =>
      Math.floor(Math.random() * (max - min) + 1) + min;

    return function start() {
      const playerStep = prompt(`Загадайте число от 1 до ${countBalls.player}`);

      const computerRandom = getRandomIntInclusive(0, 1);

      if (playerStep === null) {
        const exit = confirm('Вы уверены, что хотите выйти из игры?');
        if (exit) {
          alert(`Количество шариков у игрока: ${countBalls.player} шт., и у компьютера: ${countBalls.computer} шт.`);
          return;
        } else {
          // продолжить раунд, если игрок не покинул игру
          start();
          return;
        }
      }

      if (isNaN(playerStep)) {
        alert(`Необходимо выбрать число от 1 до ${countBalls.player}`);
        start();
        return;
      }

      // Преобразуем введенное значение в число
      const playerStepNumber = parseInt(playerStep, 10);

      if ((playerStepNumber % 2 === 0) === (computerRandom % 2 === 0)) {
        alert('Вы проиграли');
        countBalls.computer += playerStepNumber;
        countBalls.player -= playerStepNumber;
      } else if (!(playerStepNumber % 2 === 0) === !(computerRandom % 2 === 0)) {
        alert('Вы проиграли');
        countBalls.computer += playerStepNumber;
        countBalls.player -= playerStepNumber;
      } else {
        alert('Вы победили');
        countBalls.computer -= playerStepNumber;
        countBalls.player += playerStepNumber;
      }

      // вывести окно с шариками после каждого хода
      alert(`Количество шариков у игрока: ${countBalls.player} шт, и у компьютера: ${countBalls.computer} шт`);

      // если у игрока или компьютера набирается 10 шариков,
      // то он признается победителем, и завершается игра
      if (countBalls.player < 10 && countBalls.computer < 10) {
        start();
      } else {
        if (countBalls.player >= 10) {
          alert('Поздравляем, Вы победили!');
        } else {
          alert('К сожалению, Вы проиграли');
        }
      }
    };
  };
  window.PRS = game;
})();
