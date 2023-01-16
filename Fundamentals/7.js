/*
Задача:
Написать функцию, которая принимает массив строк в качестве параметра и возвращает отфильтрованный массив, содержащий те же элементы, но без “гусей”.
“Гуси” – массив строк, заранее предопределённый вами в коде.
Например,
“Гуси” – [‘London’, ‘Paris’, ‘Moscow’]
Исходный массив – [‘Minsk’, ‘Moscow’, ‘Berlin’, ‘Toronto’, ‘Paris’, ‘Moscow’]
Результат - [‘Minsk’, ‘Berlin’, ‘Toronto’]
*/

function task(arr, goose){
    return arr.filter(el => !goose.includes(el));
};
console.log(task(["Minsk", "Moscow", "Berlin", "Toronto", "Paris", "Moscow"], ["London", "Paris", "Moscow"]));
