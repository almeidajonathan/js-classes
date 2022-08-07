const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const mult = function(num1, num2) {
    return num1 * num2;
}

const div = function(num1, num2) {
    return num1 / num2;
}

const resultSoma = calc(soma, 4, 6);
const resultSub = calc(sub, 23, 15);
const resulMult = calc(mult, 6, 8);
const resultDiv = calc(div, 48, 3);

console.log(`resultado da soma: ${resultSoma}`);
console.log(`resultado da sub: ${resultSub}`);
console.log(`resultado da mult: ${resulMult}`);
console.log(`resultado da div: ${resultDiv}`);
