function findMax() {
    let max = -Infinity;

    if(arguments.length == 0) {
        return console.error("Nenhum argumento foi passado para função");
    }

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function showTypesArguments() {
    const types = [];

    for(let i = 0; i < arguments.length; i++) {
        types.push(typeof arguments[i]);
    }

    return types;
}


console.log(findMax(4,8,845,3371,10692));
console.log(showTypesArguments(1, true, [43, 20]));