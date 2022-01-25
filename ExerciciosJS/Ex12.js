function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

const teste = [12, 'Gig', 37, '12']

console.log(filtrarNumeros(teste)) 
