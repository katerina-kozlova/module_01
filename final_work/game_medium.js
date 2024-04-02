'use strict';

(() => {
  const game = () => {
    const countBalls = {
      player: 5,
      player2: 5,
    };

    // Обозначить тепкущего игрока: 1 - player (игрок), 2 - player2 (компьютер)
    let playerIndex = 1;

    // Поменять игрока после завершения каждого хода
    const replacePlayer = () => {
      playerIndex = playerIndex === 1 ? 2 : 1;
    };

    const getRandomIntInclusive = (min, max) =>
      Math.floor(Math.random() * (max - min) + 1) + min;

    return function start() {
      // Проверить, чей сейчас ход
      // Если компьютера, то
      if (playerIndex === 2) {
        // Вызвать функцию для получения случайного числа
        // от 1 до имеющегося количества шариков у компьютера
        const computerBallCount = getRandomIntInclusive(1, countBalls.player2);
        console.log(computerBallCount);
        const parityChoice = prompt(`Компьютер загадал число. Угадайте, чётное или нечётное их количество:`);
        
        // Если игрок хочет завершить игру здесь, уточнить
        if (parityChoice === null) {
          const exit = confirm('Вы уверены, что хотите выйти из игры?');
          if (exit) {
            alert(`Количество шариков у игрока: ${countBalls.player} шт., и у компьютера: ${countBalls.player2} шт.`);
            return;
          } else {
            start();
            return;
          }
        }

        // Когда компьютер выбрал случайное число шариков,
        // 1. Проверить, что игрок вводит корректные данные;
        if (parityChoice !== 'чётное' && parityChoice !== 'нечётное') {
          alert('Введите только "чётное" или "нечётное".');
          start();
          return;
        }

        // 2. Проверить, угадал игрок или проиграл
        if ((computerBallCount % 2 === 0 && parityChoice.toLowerCase() === 'чётное') || (computerBallCount % 2 !== 0 && parityChoice.toLowerCase() === 'нечётное')) {
          alert('Вы угадали! Получаете шарики.');
          countBalls.player += computerBallCount;
          countBalls.player2 -= computerBallCount;
        } else {
          alert('Вы не угадали');
          countBalls.player -= computerBallCount;
          countBalls.player2 += computerBallCount;
        }
        replacePlayer(); // Завершить ход компьютера и передать ход игроку
      } else { // Если индекс не 2, то сейчас ход игрока
        const playerStep = prompt(`Загадайте число от 1 до ${countBalls.player}`);

        // Если игрок хочет завершить игру здесь, уточнить
        if (playerStep === null) {
          const exit = confirm('Вы уверены, что хотите выйти из игры?');
          if (exit) {
            alert(`Количество шариков у игрока: ${countBalls.player} шт., и у компьютера: ${countBalls.player2} шт.`);
            return;
          } else {
            start();
            return;
          }
        }

        // Проверить, что игрок вводит число
        if (isNaN(playerStep)) {
          alert(`Необходимо выбрать число от 1 до ${countBalls.player}`);
          start();
          return;
        }

        // Проверить, что игрок вводит корректное число
        if (playerStep <= 0) {
          alert(`Введите положительное число от 1 до ${countBalls.player}`);
          start();
          return;
        }

        // Проверить, что игрок вводит число в рамках разрешенных чисел
        if (playerStep > countBalls.player) {
          alert(`Это число шариков Вам недоступно. Введите число от 1 до ${countBalls.player}`);
          start();
          return;
        }

        // Преобразовать введенное значение в число (в десятичной системе счисления)
        const playerStepNumber = parseInt(playerStep, 10);
        // Если результата функции для рандомного числа
        // будет равен 0, то присваивается значение "чётное"
        // и наоборот со значением 1
        const computerRandom = getRandomIntInclusive(0, 1) === 0 ? 'чётное' : 'нечётное';

        // Проверить, совпали ли введенные данные игрнока и компьютера
        if ((playerStepNumber % 2 === 0) === (computerRandom === 'чётное')) {
          alert('Вы проиграли');
          countBalls.player2 += playerStepNumber;
          countBalls.player -= playerStepNumber;
        } else {
          alert('Вы победили');
          countBalls.player2 -= playerStepNumber;
          countBalls.player += playerStepNumber;
        }
        replacePlayer(); // Завершить ход игрока и передать ход компьютеру
      }

      // После каждого завершенного хода
      // вывести окно с количеством шариков у игрока и компьютера
      countBalls.player = Math.min(10, Math.max(0, countBalls.player));
      countBalls.player2 = Math.min(10, Math.max(0, countBalls.player2));
      alert(`Количество шариков у игрока: ${countBalls.player} шт, и у компьютера: ${countBalls.player2} шт`);

      // если у игрока или компьютера набирается 10 шариков,
      // то он признается победителем, и завершается игра
      if (countBalls.player < 10 && countBalls.player2 < 10) {
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
