function verificaPalindromo(string) {
    try{
        if(typeof string !== 'string') throw new TypeError;

        if(string == undefined) throw new Error;
    
        return string === string.split('').reverse().join('');
    }catch(e) {
        console.log('ERRRO:',e.name, e.stack);
    }
}

console.log(verificaPalindromo(3));


// console.log(verificaPalindromo()); //output: uncaught Argumento inválido
