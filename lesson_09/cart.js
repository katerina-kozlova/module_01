'use strict';

{
    const cart = {
        items: [],
        totalPrice: 0,
        count: 0,
        // получить общую стоимость товаров
        getTotalPrice() {
            return this.totalPrice;
        },
        // добавить товар
        add(name, value, amount = 1) {
            const newProduct = {
                name: name,
                value: value,
                amount: amount,
            }
            // вызвать методы, чтобы свойства count и totalPrice были актуальны
            this.items.push(newProduct);
            this.increaseCount(amount);
            this.calculateItemPrice();
        },
        // увеличить количество товаров
        increaseCount(num) {
            this.count += num;
        },
        // посчитать общую стоимость товаров
        calculateItemPrice() {
            // this.totalPrice = this.items.reduce(function (acc, item) {
            //     acc + item.value * item.amount
            // }, 0);
            this.totalPrice = this.items.reduce((acc, item) => acc + item.value * item.amount, 0);
                                                // в каждой следующей итерации значение в acc будет результатом, 
                                                // который вернулся на предыдущем шаге
        },
        // очистить корзину
        clear() {
            this.items = []; 
            this.totalPrice = 0; 
            this.count = 0; 
        },
        // вывести общую стомость корзины и распечатать
        print() {
            this.calculateItemPrice(); 
            console.log(JSON.stringify(this.items));
            console.log(`Общаяя стоимость товаров в корзине: ${this.getTotalPrice()}`);
        },
    }

    cart.add("Cat litter", 8.26);
    cart.add("Whiskas", 0.40, 3);
    cart.add("Scratching post", 4.30, 1);

    console.log(cart);

    cart.print();
}
