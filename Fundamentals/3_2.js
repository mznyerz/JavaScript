// В другом файле описать класс B с несколькими методами, унаследовать его от класса A

import A from "./3_1.js";

class B extends A {
    constructor(name, age, height, eyes){
        super(name, age)
        this.height = height,
        this.eyes = eyes
    };

    getHeight(){
        return `My height is ${this.height}`;
    };

    getColorEyes(){
        return `My color eyes is ${this.eyes}`;
    };

    static getRandomNumber (){
       let num = Math.round(Math.random() * 1000) + 1;
        if (num > 200) return `${num} is a big number`;
        else return `${num} is a small number`;
    };
};

export default B;