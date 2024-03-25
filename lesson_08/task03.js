'use strict';

{
    const arrGenerator = (length, n, m, str) => {
        const newArray = Array.from({length}, () => Math.round(Math.random() * (m - n + 1) + n));
        
        if (str === 'even') {
            return newArray.filter(function (el) {
                return el % 2 === 0;
            });
        } else if (str === 'odd') {
            return newArray.filter(function (el) {
                return el % 2 !== 0;
            });
        }

        return newArray
    }

    console.log('Массив со случайными числами: ', arrGenerator(10, 15, -20, 'even'));
}