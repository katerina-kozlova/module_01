'use strict';

{
    const arrGenerator = (length) => {
        const newArray = Array.from({length}, () => Math.round(Math.random() * 100));

        return newArray
    }

    console.log('Массив со случайными числами: ', arrGenerator(10));
}