'use strict';

{
    const leapYear = (n, m) => {
        const newArray = [];

        const isLeapYear = (year) => {
            return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
        };

        for (let year = n; year <= m; year++) {
            if (isLeapYear(year)) {
                newArray.push(year);
            }
        }

        return newArray
    }

    console.log('Массив со високосными годами: ', leapYear(1950, 2016));
}