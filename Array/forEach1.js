// Função normal
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

// Arrow function
aprovados.forEach(nome => console.log(nome))

// Função arrow => .forEach
const exibirApovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirApovados)


