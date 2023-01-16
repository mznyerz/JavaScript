/*
Задача:
 1.Вызовите функцию с контекстом объекта.
 2.Добавьте метод в объект (используя ф-ю user), чтобы выводилось "Hello Username".
*/
const userInfo = {
    name: "Username",
    age: 30,
  };

function user () {
    return this.name;
  };

// 1.Вызовите функцию с контекстом объекта.
console.log(user.call(userInfo));
// 2.Добавьте метод в объект (используя ф-ю user), чтобы выводилось "Hello Username".
userInfo.hello = function () {return `Hello ${user.call(this)}`;};
console.log(userInfo.hello());