'use strict';

{
  const game = () => {
    const hiddenNumber = Math.round(Math.random() * 100);

    const startGame = (num) => {
      let input = prompt('Введите число от 1 до 100');

      if (input === null) {
        alert('Игра завершена');
        return; // выйти из рекурсии, если пользователь нажмет "отмена"
      }

      if (isNaN(input)) {
        alert('Введи число!!');
      } else {
        console.log(hiddenNumber);
        input = parseInt(input);

        if (input > num) {
          alert('Меньше!');
        } else if (input < num) {
          alert('Больше!');
        } else if (input === num) {
          alert('Правильно!');
          return; // завершить игру, выйти из рекурсии
        }
      }

      startGame(num); // вызвать рекурсивную функцию внутри этой функции
      // для продолжения игры, если ответ был неверный
    };

    startGame(hiddenNumber); // вызвать/запустить рекурсивную функцию
  };

  game();
}
