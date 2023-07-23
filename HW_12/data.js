"use strict";
function getProductsList() {
  return JSON.parse(data).goods;
}

function getProductsObject() {
  return JSON.parse(data).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const data = `{
  "goods": [
    {
      "id": "1",
      "name": "Крутая куртка",
      "description": "Очень модная куртка, покупаем, пока не распродали весь товар.",
      "price": 3700,
      "img": "img/product1.svg"
    },
    {
      "id": "2",
      "name": "Пиджак модный",
      "description": "Непонятно что на картинке продается, пусть будет крутой пиджак.",
      "price": 5200,
      "img": "img/product2.svg"
    },
    {
      "id": "3",
      "name": "Толстовка",
      "description": "Крутая, синяя толстовка от фирмы GB.",
      "price": 1500,
      "img": "img/product3.svg"
    },
    {
      "id": "4",
     "name": "Крутая футболка",
      "description": "Футболка на бородатом мужике, хочешь быть таким же бородатым - покупай!",
      "price": 4500,
      "img": "img/product4.svg"
    },
    {
      "id": "5",
      "name": "Пиджак",
      "description": "Голубой пиджак, хочешь? А он скоро закончится!",
      "price": 3400,
      "img": "img/product5.svg"
    },
    {
      "id": "6",
      "name": "Рубашка женская",
      "description": "Модная рубашка на модной девушке, а ты уже модная?",
      "price": 6100,
      "img": "img/product6.svg"
    }
  ]
}`;
