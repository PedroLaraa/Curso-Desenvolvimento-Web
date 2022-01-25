const repetir = function(repetidor, quantDeVezes){
    const recebe = []
    for(let i = 0; i < quantDeVezes; i++){
        recebe.push(repetidor)
    }
    console.log(recebe)
}

repetir('Opa', 3)
repetir(6, 2)
