const entreMinMax = function(numero, minimo, maximo, inclusivo = true){
    if(numero >= minimo & numero <= maximo){
        return inclusivo = true
    }else{
        return inclusivo = false
    }
}

console.log(entreMinMax(10, 1, 50))
