// Task 2*** 
// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
// Для дальнейшего использования в функции, описанной в задании
var fs = require('fs');
var file_readed = fs.readFileSync("D:/js/task2.js", "utf8");
console.log(file_readed);