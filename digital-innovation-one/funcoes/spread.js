function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

//enviar como argumento cada elemento do array separado individualmente
console.log(sum(...numbers));