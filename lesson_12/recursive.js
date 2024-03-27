'use strict';

{
  const recursiveFoo = (arr) => {
    const newNumber = Math.round(Math.random() * 10);
    arr.push(newNumber);

    const sum = arr.reduce((a, b) => a + b, 0);

    if (sum >= 50) {
      return arr;
    } else {
      return recursiveFoo(arr); // вызвать рекурсивную функцию
      // для добавления числа
    }
  };

  const arrayNumbers = [1, 4, 5, 7, 2, 4];
  console.log(recursiveFoo(arrayNumbers));
}
