/*
Задача:
Написать функцию, которая принимает строку в качестве параметра и возвращает ту же строку, но все пробелы заменяет на нижнее подчёркивание.
Например,
Исходная строка – “Я люблю Javascript”
Результат – “Я_люблю_Javascript”
*/

// 1:
function changeFirst (str){
    return str.replace(/\s/g, "_");
};
console.log(changeFirst("Мне нравится JavaScript"));

// 2:

function changeSecond (str){;
    return str.split(' ').join('_');
};
console.log(changeSecond('Мне не нравится JavaScript хотя это не правда'));