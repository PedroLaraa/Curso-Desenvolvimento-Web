const porta = 3003 //Processo dentro do computador(identificador de processo)

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
}) // Isso é uma requisição e se converte em JSON automaticamente

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
}) // O pramêtro vem da requisição

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
