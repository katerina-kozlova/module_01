'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;

  const getFigure = (lang) => {
    if (lang === 'ENG') {
        return FIGURES_ENG;
    } else {
        return FIGURES_RUS;
    }
  }

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    // начать игру, 1 раунд
    return function start() {
      const playerChoice = prompt('Выберите: камень, ножницы, бумага');

      if (playerChoice === null) {
        const exit = confirm('Вы уверены, что хотите покинуть игру?');
        if (exit) {
          alert(`Очки: Игрок ${result.player} : Компьютер ${result.computer}`);
          return;
        } else {
            // продолжить раунд, если игрок не покинул игру
            start();
            return;
        }
    }
    // возвратить индекс первого найденного в массиве элемента,
    // который подходит под условие.
    const playerIndex = getFigure(language).findIndex((figure) =>
        // если введенная буква это первая буква искомой фигуры, вернуть true
        // привести в нижний регист
        figure.startsWith(playerChoice.toLowerCase()));

      if (playerIndex === -1) { // если нет подходящего элемента,
                                // метод findIndex возвращает -1
        alert('Выбрана некорректная фигура. Попробуйте еще раз.');
        start();
        return;
      }

      // сгенерировать случайное число для компьютера
      const computerIndex = getRandomIntInclusive(0, 2);

      if (playerIndex === computerIndex) {
        alert('Ничья');
      } else if (playerIndex === 0 && computerIndex === 1) {
        alert('Вы победили');
        result.player++;
      } else if (playerIndex === 1 && computerIndex === 2) {
        alert('Вы победили');
        result.player++;
      } else if (playerIndex === 2 && computerIndex === 0) {
        alert('Вы победили');
        result.player++; // в случае победы в раунде добавить очко в результат
      } else {
        alert('Вы проиграли');
        result.computer++;
      }

    // вывести окно с очками после каждого раунда
      alert(`Счет: Игрок ${result.player}, Компьютер ${result.computer}`);

      // если игрок или компьютер набирает 3 очка,
      // признается победителем, и завершается игра
      if (result.player < 3 && result.computer < 3) {
        start();
      } else {
        alert('Игра завершена.');
      }
    };
  };

  window.PRS = game;
})();
