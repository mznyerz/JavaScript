/*
Задача:
Написать функцию, которая принимает массив чисел в качестве параметра и возвращает массив только с чётными числами
Например,
Исходный массив – [2, 4, 5, 7, 8]
Результат - [2, 4, 8]
*/

function multipleOfTwo(...numbers){
    return numbers.filter(el => el % 2 === 0);
};
console.log(multipleOfTwo(2,3,4,5,6,7,8,9,10,11,102,103,104,106,222,873,224,808));
