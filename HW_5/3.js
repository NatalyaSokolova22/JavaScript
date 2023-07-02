"use strict";

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15%, используя
// метод forEach.

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];
products.forEach((newPrice) => {
  newPrice.price *= 0.85;
});
console.log(products);
