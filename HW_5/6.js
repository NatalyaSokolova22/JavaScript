"use strict";

// Задание 6:
// Создайте объект riddles. Добавьте свойства question, answer.
// Ссоздайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer.
//  Если ответилb неверно, то в консоль выводится текст: “Вы проиграли!”

/*
const riddles = {
  question: "Whats the difference between here and there?",
  answer: "t",
  hints: ["Wrong! Hint: its a letter", "Wrong! Hint: its a first letter"],
  askQuestion() {
    userAnswer = prompt(this.question);
    // return console.log((userAnswer === this.answer) ? 'You win' : 'You loose');
    if (userAnswer !== this.answer) {
      alert(this.hints[0]);
      userAnswer = prompt(this.question);
    }
    if (userAnswer !== this.answer) {
      alert(this.hints[1]);
      userAnswer = prompt(this.question);
    }
    if (userAnswer !== this.answer) {
      alert("You loose");
    } else alert("You win");
  },
};
riddles.askQuestion();
*/
