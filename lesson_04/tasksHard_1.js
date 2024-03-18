'use strict';

{
    const proceeds = Number(prompt("Укажите ваш месячный доход:", "16000"));

    switch (true) {
        case proceeds <= 15000:
            console.log(`Сумма вашего налога составляет ${proceeds * 0.13}`)
            break
        case proceeds > 15000 && proceeds <= 50000:
            console.log(`Сумма вашего налога составляет ${proceeds * 0.20}`)
            break 
        case proceeds > 50000:
            console.log(`Сумма вашего налога составляет ${proceeds * 0.30}`)
            break   
        default:
            console.log('Что-то пошло не так. Попробуйте еще раз указать ваш доход.')
            console.log(Error)
            break  
    }
}