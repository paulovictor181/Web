function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

// toda function tem um array de arguments que são os atributos passados

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste")) // Soma os números e concatena com a String
console.log(soma('a', 'b', 'c'))

