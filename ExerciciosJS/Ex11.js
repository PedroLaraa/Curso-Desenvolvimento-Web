const primeiroEultimo = function(array) {
    let resultado = []
    let tamArray = array.length
    resultado.push(array[0], array[tamArray - 1])
    console.log(resultado)
}

const teste = [2, 4, 8, 12]

primeiroEultimo(teste)
