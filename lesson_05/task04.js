'use strict';

{
    const calculate = (sum, count, promo) => {
        let discount = 0; // переменная для отслеживания суммы примененных скидок

        if (count > 10) {
            discount += sum * 0.03; // применить скидку 3% к общей сумме корзины
            sum -= discount; // вычесть примененную скидку из общей суммы
        } 
        if (sum > 30000) {
            const excessSum = sum - 30000; // считать сумму, превышающую 30000
            const excessDiscount = excessSum * 0.15; // считать сумму скидки на превышение
            discount += excessDiscount; // добавить скидку на превышение к общей сумме скидок
            sum -= discount;
        } 
        if (promo === "METHED") {
            const methedDiscount = sum * 0.10; // считать сумму скидки 10%
            discount += methedDiscount;
            sum -= methedDiscount;
        } 
        else if (promo === "G3H2Z1" && sum > 2000) { // если промокод равен "G3H2Z1" и сумма больше 2000
            const secondDiscount = 500; // установить скидку 500 рублей для промокода "G3H2Z1"
            discount += secondDiscount; // добавить скидку "G3H2Z1" к общей сумме скидок
            sum -= secondDiscount;
        }

        return sum;
    }
    
    const result = calculate(65000, 14, "G3H2Z1");
    console.log('result: ', result);
}
