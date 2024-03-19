'use strict';

{
    const reverseLine = (str) => {
        return str.split('').reverse().join('');
    }
    
    const result = reverseLine("Привет мир");
    console.log('result: ', result);
}
