"use strict";

/*
Необходимо найти любой бесплатный api в интернете на произвольную тему, 
из которого нужно будет получить данные и сохранить их в файл data.js,
который необходимо создать рядом с текущим html-файлом. Внутри файла data.js 
создайте переменную, которая будет хранить данные из публичного api. Данные 
из api необходимо просто скопировать и вставить как значение данной переменной.
Минимальный набор данных, который нас интересует в api: загловок, картинка, 
параграф.

Создайте еще один файл main.js, в котором необходимо из значений переменной, 
которая создана в файле data.js, сформировать контент из данных.
Добавить данный контент на сайт, в div с классом app.

Можете добавить стили, если есть желание (не обязательно).
*/

const productsBox = document.querySelector(".app");
const dataProductsDb = JSON.parse(data);
console.log(dataProductsDb);

dataProductsDb.forEach((element) => {
  const products = document.createElement("div");
  products.classList.add("product");

  const productName = document.createElement("h2");
  productName.classList.add("product__name");
  productName.textContent = element.name;

  const img = document.createElement("img");
  img.classList.add("product__img");
  img.setAttribute("alt", "Апельсины");
  img.src = element.img;

  const price = document.createElement("div");
  price.classList.add("product__price");
  price.textContent = element.price;

  const type = document.createElement("div");
  type.classList.add("product__type");
  type.textContent = element.type;

  productsBox.appendChild(products);
  products.appendChild(productName);
  products.appendChild(img);
  products.appendChild(price);
  products.appendChild(type);
});
