const somentePares = function(array) {
    const pares = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 ){
            pares.push(array[i])
        }
    }
    return pares
}

const numeros = [2, 23, 45, 40]

console.log(somentePares(numeros))
