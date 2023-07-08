"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/

const dropEls = document.querySelectorAll(".dropdown-item");
dropEls.forEach((dropEls) => {
  dropEls.classList.add("excellent-dropdown");
});
console.log(dropEls);

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/

const btnEl = document.querySelector(".btn");
if (btnEl.classList.contains("btn-secondary")) {
  btnEl.classList.remove("btn-secondary");
} else {
  btnEl.classList.add("btn-secondary");
}
console.log(btnEl);

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/

const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);

/*
4. Используя метод insertAdjacentHTML, добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/

const divDrop = document.querySelector(".dropdown");
divDrop.insertAdjacentHTML("afterend", `<a href="#">link</a>`);
console.log(divDrop);

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

const idEl = document.querySelector("#dropdownMenuButton");
document.getElementById("dropdownMenuButton").id = "superDropdown";
console.log(idEl);

/*
6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

const atrEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
atrEl.dataset.dd = "3";
console.log(atrEl);

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/

const typeEl = document.querySelector(".dropdown-toggle");
typeEl.removeAttribute("type");
console.log(typeEl);
