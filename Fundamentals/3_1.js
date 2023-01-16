// Описать класс A с конструктором и несколькими методами

class A {
    constructor(name, age){
        this.name = name,
        this.age = age
    };
    
    hello(){
        return `Hello my friend ${this.name}`;
    };

    static getDate () {
        return new Date().toDateString();
    };

    getAge() {
        return `I have ${this.age} old years`;
    };
};

export default A;
