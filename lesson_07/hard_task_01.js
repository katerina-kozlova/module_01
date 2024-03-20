'use strict';

{
    const getAveragePriceGoods = (arr) => {
        const sum = arr.map(function (array) {
            return array[1] / array[0];
        })
        return sum
    }

    const allСashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
    ];

    console.log('Средняя стоиомсть товара: ', getAveragePriceGoods(allСashbox));
}