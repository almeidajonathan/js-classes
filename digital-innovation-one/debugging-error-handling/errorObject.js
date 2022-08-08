function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError('Envie os parametros');

        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo 'object'");

        if(typeof num !== 'number') throw new TypeError("Segundo argumento precisa ser do tipo 'number'");    

        if(arr.length !== num) throw new RangeError('Tamanho inválido');
    
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um -> ReferenceError');
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('Este é um erro -> TypeError');
            console.log(e.name);
            console.log(e.stack);
        } else if(e instanceof RangeError) {
            console.log('Este é um erro -> RangeError');
            console.log(e.name);
            console.log(e.stack);
        } else {
            console.log('Ocorreu um tipo de erro inesperado: ', e);
        }
    }
}

console.log(validaArray(['a','b','c'], 3));

