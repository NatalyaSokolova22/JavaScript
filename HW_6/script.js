"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/

const superLink = document.getElementById("super_link");
console.log(superLink);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/

const allLinks = document.querySelectorAll(".card-link");
allLinks.forEach((element) => {
  element.textContent = "Ссылка";
});

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

const cardBodyEl = document
  .querySelector(".card-body")
  .querySelectorAll(".card-link");
console.log(cardBodyEl[0], cardBodyEl[1]);

/*
4. Найти первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/

const firstDataNumber = document.querySelectorAll('[data-number="50"]');
console.log(firstDataNumber[0]);

/*
5. Выведите содержимое title страницы в консоль.
*/

const tagTitle = document.querySelector("title");
console.log(tagTitle.textContent);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/

const cardTitleEl = document.querySelector(".card-title");
console.log(cardTitleEl.parentNode);

/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/

const greeting = document.querySelector(".card");
const paragraph = document.createElement("p");
paragraph.textContent = "Привет!";
greeting.prepend(paragraph);

/*
8. Удалите тег h6 на странице.
*/

const hRem = document.querySelector("h6");
hRem.remove();
