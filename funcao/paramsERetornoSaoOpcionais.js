function area(largura, altura){
    const area = largura * altura
    if(area > 20) 
    {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else
    {
        return area
    }
}

console.log(area(2, 2)) // Funcionou normal
console.log(area(2)) // Divisão em o segundo termo 
console.log(area()) // Not a Number, sem número para fazer as operações
console.log(area(2, 3, 17, 22, 44)) // Ignorou os outros parametros
console.log(area(5, 5)) // não foi retornado nada