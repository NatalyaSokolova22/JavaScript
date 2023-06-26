"use strict";

/* 
Задание 3
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому, что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const array = [];

for (let i = 0; i < 5; i++) {
  array.push(getRandomInt(0, 10));
}
console.log(array);

// 1. Сумма элементов массива:
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Сумма чисел массива равна ${sum}.`);
}
arraySum(array);

// 2. Минимальное значение в массиве:
function arrayMin(array) {
  const min = Math.min(...array);
  console.log(`Минимальное значение в массиве равно ${min}.`);
}
arrayMin(array);

// 3. Новый массив, содержащий индексы сгенерированного выше массива,
// в которых значение равно 3.

function newArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      newArray.push(i);
    }
  }
  console.log(newArray);
}
newArray(array);
*/
