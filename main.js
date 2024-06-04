"use strict";
//Interface with a Method Signature
const calculator1 = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
};
console.log(calculator1.add(5, 3));
console.log(calculator1.subtract(5, 3));
console.log(calculator1.multiply(5, 3));
console.log(calculator1.divide(6, 3));
