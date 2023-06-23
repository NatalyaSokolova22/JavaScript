/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

/*
const checkNumber = (number) => {
  if (!Number.isFinite(number)) {
    console.log('Значение задано неверно');
    return;
} 
if (number > 0) {
    const clearSalary = (number - number * 0.13);
    console.log(`Размер заработной платы за вычетом налогов равен ${clearSalary.toFixed(
        2)}`);
} 
}

const number = +prompt('Задача 2: ' + 'Введите число: ');
checkNumber(number);
*/

/*
const checkNumber = (number) => {
  if (Number.isNaN(number)) {
    console.log("Значение задано неверно");
    return;
  }
  if (number > 0) {
    const clearSalary = number - number * 0.13;
    console.log(
      `Размер заработной платы за вычетом налогов равен ${clearSalary.toFixed(
        2
      )}`
    );
  }
};

const number = +prompt("Задача 2: " + "Введите число: ");
checkNumber(number);
*/
