'use strict';

{
  const rectangle = {
    setWith(numWith = 5) {
      return numWith;
    },
    setHeight(numHeight = 5) {
      return numHeight;
    },
    getPerimeter() {
      const perimeter = 2 * (this.setWith(7) + this.setHeight(9));
      return console.log(`Периметр прямоугольника равен ${perimeter} см`);
    },
    getSquare() {
      const square = this.setWith(7) * this.setHeight(9);
      return console.log(`Площадь прямоугольника равна ${square} см`);
    },
    print() {
      this.getPerimeter();
      this.getSquare();
    },
  };

  rectangle.print();
}
