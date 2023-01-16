/*
Написать методы с использованием callbacks, promises, async/await
- Только callback
- Только promises (resolve + reject flow)
- Только async/await
- Комбинация callback + promise
- Комбинация promise + async/await
*/

import fetch from "node-fetch";

// Только callback :

function onlyCallback(name, callback) {
    if(callback() !== undefined && typeof(callback) === 'function') console.log(callback(name));
    else throw Error('Enter a callback');
};

function example(n) {
    return `${n} how old are you?`;
};

onlyCallback("Andrey", example);

// Только promises (resolve + reject flow) :

const p_resolve = new Promise((resolve, reject) => {
    resolve(1);
});
p_resolve.then(result => console.log(result));

const p_reject = new Promise((resolve, reject) => {
    reject(2);
});
p_reject.catch(result => console.log(result));

// Только async/await :

async function request(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

request('https://reqres.in/api/users/4');

// Комбинация callback + promise :

function call_prom(name, callback) {
    if(callback() !== undefined && typeof(callback) === 'function') callback(name).then(r => console.log(r));
    else throw Error('Enter a callback');
};

function prom(a) {
     return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Hello ${a}. What's up?`), 300);
    });
};

call_prom('Andrey', prom);

// Комбинация promise + async/await:

async function await_promise (url_await, url_promise){
    const response_await = await fetch(url_await);
    const data_await = await response_await.json();
    let id_user_Tobias = data_await.data.find(el => el.first_name === "Tobias").id; // id where first_name === 'Tobias';
    fetch(`${url_promise}/${id_user_Tobias}`).then(response => response.json()).then(data => console.log(data));
};

await_promise('https://reqres.in/api/users?page=2', 'https://reqres.in/api/users');