// Array é um OBJETO, organiza dados através de índices (0,1,2...)
// Array é preferível ser homogênea mesmo podendo ser dde tipos variados

console.log(typeof Array, typeof new Array, typeof [])

let aprovados1 = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados1)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Caso n tenha o índice[] retorna undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona um índice (array.length + 1)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Mistura/Sorteia os elementos do array
console.log(aprovados)

delete aprovados[1] // Deleta o índice 1 do array (coloca como UNDEFINED)
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2') // Adicionar e remover índices
// .splice(x,y) x = Índice --- y = Número de elementos a serem excluídos a partir do x
console.log(aprovados)
