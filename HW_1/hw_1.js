//1. Создать переменную “item_1”
var item_1;
//2. Присвоить переменной item_1 цифру 5.
var item_1 = 5;
//3. Вывести в консоль item_1.
console.log(item_1);
//4. Создать переменную “item_2”
var item_2;
//5. Присвоить переменной item_2 цифру 3.
var item_2 = 3;
//6. Вывести в консоль item_2.
console.log(item_2);
//7. Создать переменную “item_3”
var item_3;
//8. Присвоить переменной item_3 сложение item_1 и item_2.
var item_3 = item_1 + item_2;
//9. Вывести в консоль item_3.
console.log(item_3);
//10. Создать переменную “item_4”
var item_4;
//11. Присвоить переменной item_4 строку “Yolochka”
var item_4 = 'Yolochka';
//12. Вывести в консоль item_4.
console.log(item_4);
//13. Вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4);
//14. Вывести в консоль умножение item_3 и item_4.
console.log(item_3 * item_4);
//15. Создать переменную “item_5”
//16. Присвоить переменной item_5 переменную item_3
var item_5 = item_3;
//17. Создать переменную item_6.
var item_6;
//18. Создать переменную item_6_type
var item_6_type;
//19. Присвоить переменной item_6 значение 15
var item_6 = 15;
//20. Присвоить переменной item_6_type тип переменной item_6
var item_6_type = typeof(item_6);
//21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log("item_6 ==", item_6, "item_6_type ==", item_6_type);
//22. Создать переменную item_7 и в ней преобразовать item_6 в String.
var item_7 = String(item_6);
console.log('item_7 ==', typeof(item_7), "item_7 =", item_7);
//23. Создать переменную item_7_type
var item_7_type
//24. Присвоить переменной item_7_type тип переменной item_7
var item_7_type = typeof(item_7);
//25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item_7_type ==", item_7_type, "item_7 ==", item_7);
//26. Создать переменную “age_1” и присвоить ей значение 10
//27. Создать переменную “age_2” и присвоить ей значение 18
//28. Создать переменную “age_3” и присвоить ей значение 60
var age_1 = 10, age_2 = 18, age_3 = 60;
console.log(age_1, age_2, age_3);
//29. Создать if в котором будите проверять значение переменной age_1
//30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//33. Иначе выводите “Technical work”.
if (age_1 < age_2) {
    console.log("You don’t have access cause your age is ” + age_1 + “ It’s less then")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome !')
} else if (age_1 > age_3) {
    console.log('“Keep calm and look Culture channel”')
} else {
    console.log('“Technical work”')
}
/*
=======
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61

2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
*/

//1*:
function cheackAge(age_1,age_2,age_3){
    if (age_1 < age_2) {
        console.log("You don’t have access cause your age is ” + age_1 + “ It’s less then");
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !');
    } else if (age_1 > age_3) {
        console.log('“Keep calm and look Culture channel”');
    } else {
        console.log('“Technical work”');
    }
};
cheackAge(17, 18, 61);

//2*:
function check(age_1,age_2,age_3){
    if (typeof(age_1) == 'number' && typeof(age_2) == 'number' && typeof(age_3) == 'number'){
        console.log('ok');
        if (age_1 < age_2) {
            console.log("You don’t have access cause your age is ” + age_1 + “ It’s less then");
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log('Welcome !');
        } else if (age_1 > age_3) {
            console.log('“Keep calm and look Culture channel”');
        } else {
            console.log('“Technical work”');
        }
    }else {
        console.log('error not a number');
    }
};
check(17, 18, 61)

//3*:
function check(age){
    var valid = true;
    for (let i =0; i<age.length;i++){
            age[i] = Number(age[i])
            if (isNaN(age[i]) == true ){
                console.log(age[i])
                valid = false
    }}
    if (valid == true){
        console.log('ok');
        if (age[0] < age[1]) {
            console.log("You don’t have access cause your age is ” + age_1 + “ It’s less then");
        } else if (age[0] >= age[1] && age[0] < age[2]) {
            console.log('Welcome !');
        } else if (age[0] > age[2]) {
            console.log('“Keep calm and look Culture channel”');
        } else {
            console.log('“Technical work”');
        }
    }else if (valid == false) {
        console.log('error not a number');
        console.log(valid)
    }
};
check([12,33,22])

//3* (E)
function ok(age){
    var valid = true
    age.forEach((element,index) =>{
            age[index] = Number(age[index]);
            if (isNaN(element) == true){
                valid = false
            }
    })
        if (valid == true){
            if (age[0] < age[1]){
                console.log("You don’t have access cause your age is ” + age_1 + “ It’s less then");    
            } 
            else if (age[0] >= age[1] && age[0] < age[2]){
                console.log('Welcome !');    
    } 
            else if (age[0] >= age[2]){
                console.log('“Keep calm and look Culture channel”');
    }      
    }   else if (valid == false) {
        console.log('fail')
    }
}

ok([22,'ss33',22])






