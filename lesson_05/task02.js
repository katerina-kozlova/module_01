'use strict';

{
    const firstCapitalLetter = (str) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    
    const result = firstCapitalLetter("привет Мир");
    console.log('result: ', result);
}
