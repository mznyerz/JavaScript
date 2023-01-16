// Продемонстрировать работу try…catch…finally

import fetch from 'node-fetch';
const correct_link = 'https://reqres.in/api/users/2';
const incorrect_link = 'https://reqresss.ins/api/users/2';

// correct (try + finally) asynchronous code:
async function correct_request(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(`Not active ${e}`);
    } finally {
        console.log('anyway will be executed');
    }
};

correct_request(correct_link);

// incorrect (catch + finally) asynchronous code:
async function incorrect_request(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (e) {
        console.log('Active catch asynchronous code:', e);
    }
    finally {
        console.log('anyway will be executed');
    }
};

incorrect_request(incorrect_link);

// correct (try + finally) synchronous code:
function correct(string) {
    try {
        let arr = string.split(' ');
        console.log(arr);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('anyway will be executed');
    }
};

correct('1 2 3 4 5');

// incorrect (try + finally) synchronous code:
function incorrect(string) {
    try {
        let arr = string.split(' ');
        console.log(arr);
    } catch (error) {
        console.log('Active catch synchronous code:', error);
    } finally {
        console.log('anyway will be executed');
    }
};

incorrect([1,2,3,4,5]);