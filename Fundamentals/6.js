/*
Задача:
Написать функцию, которая принимает массив строк в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
Если таких слов несколько - выводит их все.
*/

function task(arr){
    return arr.filter(el => el.length === Math.max(...arr.map(el => el.length)));
};
console.log(task(["hello", "bye", "okguys", "abcdefg", "oneoneoneone", "twotwotwotwo"]));