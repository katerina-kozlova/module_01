'use strict';

{
    const nameOfGoods = "Cat litter";
    const amountOfGoods = 52;
    const valueOfGoods = 8.26;
    const categoryOfGoods = "Care";

    console.log(nameOfGoods);
    console.log(`Общая сумма товара: ${amountOfGoods * valueOfGoods}`);
}

{
    const nameOfGoods = "Whiskas";
    const amountOfGoods = 352;
    const valueOfGoods = 0.40;
    const categoryOfGoods = "Pet Food";
    
    console.log(nameOfGoods);
    console.log(`Общая сумма товара: ${amountOfGoods * valueOfGoods}`);
}

// Новый блок инструкций
{
    const defineTheNameOfGoods = prompt("Наименование товара", "Whiskas");
    const defineTheAmountOfGoods = Number(prompt("Количество товара", "17"));
    const defineTheValueOfGoods = prompt("Категория товара", "Pet Food");
    const defineTheCategoryOfGoods = Number(prompt("Цена товара", "0.50"));

    console.log(typeof defineTheAmountOfGoods);
    console.log(typeof defineTheCategoryOfGoods);

    console.log(`В наличии ${defineTheAmountOfGoods} шт. ${defineTheNameOfGoods} на сумму ${defineTheAmountOfGoods * defineTheCategoryOfGoods}$`);
}