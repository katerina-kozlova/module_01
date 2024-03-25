'use strict';

{
    const arrGenerator = (length, n, m) => {
        const newArray = Array.from({length}, () => Math.round(Math.random() * (m - n + 1) + n));

        return newArray
    }

    console.log('Массив со случайными числами: ', arrGenerator(10, 15, -20));
}