'use strict';

{
    const getAverageValue = (arr) => {
        const sum = arr.reduce(function (curSum, curNum) {
            return curSum + curNum
        }, 0);
        return Math.floor(sum / arr.length);
    }

    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    console.log('Средний чек за день: ', getAverageValue(allСashbox));
}