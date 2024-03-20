'use strict';

{
    const addPrefix = (arr, prefix) => {
        const newArray = arr.map(function (el) {
            return `${prefix} ${el}`;
        })
        return newArray
    }

    const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    console.log('Массив с префиксами: ', addPrefix(names, 'Mr'));
}