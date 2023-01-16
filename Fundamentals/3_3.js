// Ещё в одном файле создать экземпляр класса В и вызвать метод класса A и класса B

import A from "./3_1.js";
import B from "./3_2.js";

const class_A = new A("Unknown", 101);
const class_B = new B("Andrey", 24, 181, "blue");

console.log(class_A);
console.log(class_B);

// methods class_A:
console.log(class_A.hello());
console.log(class_A.getAge());

// STATIC method Class A (called not from an instance but from a class):
console.log(A.getDate());

////

// methods class_B:
console.log(class_B.hello()); // inherited from Class A
console.log(class_B.getAge()); // inherited from Class A
console.log(class_B.getHeight());
console.log(class_B.getColorEyes());

// STATIC methods class B (called not from an instance but from a class):
console.log(B.getDate()); // inherited from Class A
console.log(B.getRandomNumber());
