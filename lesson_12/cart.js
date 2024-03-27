'use strict';

{
  const cart = {
    items: [],
    count: 0,
    discount: 0,
    setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
      } else {
        this.discount = 0;
      }
    },
    // получить общую стоимость товаров
    totalPrice() {
      return this.calculateItemPrice();
    },
    // добавить товар
    add(name, value, amount = 1) {
      const newProduct = {
        name,
        value,
        amount,
      };
      // вызвать методы, чтобы свойства count и totalPrice были актуальны
      this.items.push(newProduct);
      this.increaseCount(amount);
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
      return this.items.reduce((acc, item) =>
        acc + item.value * item.amount, 0) * (1 - this.discount / 100);
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
      console.log(JSON.stringify(this.items));
      console.log(`Общаяя стоимость товаров в корзине: ${this.totalPrice()}`);
    },
  };

  cart.add('Cat litter', 8.26);
  cart.add('Whiskas', 0.40, 3);
  cart.add('Scratching post', 4.30, 1);

  cart.setDiscount('METHED');

  console.log(cart);

  cart.print();
}
