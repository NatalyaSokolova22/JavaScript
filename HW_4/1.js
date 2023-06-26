"use strict";

/* 
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

// проверяем число на кратность (четное/нечетное)
function isEven(number) {
  return number % 2 === 0;
}

// выводим 11 строк (с 0 до 10) на экран с соответствующими комментариями
for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (isEven(i)) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}