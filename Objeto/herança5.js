console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Toda função tem um Prototype

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([10, 2, 3, 4 ,5].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
