"use strict";

// Задание 2
// Необходимо из объекта post, вывести значения, к которым прописан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

const rat = post.comments.map((x) => x.rating);
const rat2 = rat[0];
const use = post.comments.map((a) => a.userId);
const txt = post.comments.map((b) => b.text);
console.log(post.author, rat2.dislikes, use[1], txt[1]);
