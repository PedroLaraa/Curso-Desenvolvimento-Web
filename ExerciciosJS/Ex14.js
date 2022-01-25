const anoBisexto = function (ano) {
    if(ano % 100 != 0 && ano % 4 == 0){
        console.log(`O ano ${ano} é bissexto!`)
    }else{
        console.log(`O ano ${ano} NÃO é bissexto!`)
    }
}

anoBisexto(2020)
anoBisexto(2100)
anoBisexto(2024)
anoBisexto(2200)