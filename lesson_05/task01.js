'use strict';
{
    const currencyConverter = (currency) => {
        return currency * 1.2 * 64;
    }
    
    const result = currencyConverter(35);
    console.log('result: ', result);
}
