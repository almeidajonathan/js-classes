function verificaPalindromo(string) {
    if(!string) throw 'Argumento inválido';

    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromo('civic'));
// console.log(verificaPalindromo()); //output: uncaught Argumento inválido
