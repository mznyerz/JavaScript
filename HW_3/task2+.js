// Task 2*** 
// Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
// Для дальнейшего использования в функции, описанной в задании
var fs = require('fs');
var file_readed = fs.readFileSync("D:/json/task2.json", "utf8");
// console.log('type file_readed = '+ typeof(file_readed))
//
let uniqueName = [];
let kekw = [];
const NewUsers = JSON.parse(file_readed).filter(item => {
    if (!uniqueName.includes(item.name)){
        uniqueName.push(item.name)
        console.log(item.name)
        return kekw.push(item)
    } else {
        console.log('duplicate - ', item.name)
    }
})
console.log(kekw)
