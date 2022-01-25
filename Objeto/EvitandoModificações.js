// Object.preventExtensions - Não adiciona atributos mas pode remover e alterar

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Entensível:', Object.isExtensible(produto))

produto.nome = 'Boorracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal = Só se consegue alterar os valores

const pessoa = {nome: 'Juliana', idade: 35}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = selado + valores constantes

