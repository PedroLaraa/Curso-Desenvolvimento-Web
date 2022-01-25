const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// .pop
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

// .push
pilotos.push('Verstappen') // Adiciona elemento no último índice da array
console.log(pilotos)

// .shift
pilotos.shift() // Remove o primeiro elemnto do array
console.log(pilotos)

// .unshift
pilotos.unshift('Hamilton') // Adiciona um elemento no índice 0 do array
console.log(pilotos)

// .splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)
//
//
//

// .slice
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O índice 4 não entra !
console.log(algunsPilotos2)
