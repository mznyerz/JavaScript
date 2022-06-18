// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (i=1;i<=10;i++){
    console.log(Math.pow(2,i))
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function maz(i){
    console.log(Math.pow(2,i))
}
maz(2)
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
p= [];
for (i=0, k = ':)';i<=5;i++, p.push(k)){

    console.log(p.join(''))
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
function printSmile(stroka, numberOfRows) {
    sumStrok = [];
    if (typeof(stroka) !== 'string'){
        console.log('На вход принимается только строка')
    } else if (typeof(stroka == 'string')){
    for (i=0; i<=numberOfRows;i++, sumStrok.push(stroka)){
        console.log(sumStrok.join(''))
    }
}}
printSmile(':)',4)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructure(word) {
    var countV = 0; countC = 0;
    var countVowels = 'AaEeIiOoUuYy'
    var countСonsonants = 'BbcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ'
    for (i=0;i<=word.length;i++){
        if(countСonsonants.includes(word[i])){
            countV += 1
        } else if (countVowels.includes(word[i])){
            countC += 1
        }
    }
    console.log('Слово :', word, "Состоит из", countV, 'согласных'+ " "+ 'и' + " " + 'из', countC, 'гласных')
}
getWordStructure('Check-list')
// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'
function isPalindrom(word){
    if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')){
        console.log('Слово является палиндромом')
    }else {
        console.log('Слово не является палиндромом')
    }

}
isPalindrom('Abba')