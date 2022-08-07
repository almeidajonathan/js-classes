function exponencial(arr, exp = 1) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** exp);
    }

    return result;
}


console.log(exponencial([1,2,3,4],2));
console.log(exponencial([2,4,6,8], 4));