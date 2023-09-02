const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores(3))
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
// Adiciona no Array
console.log(valores)
// Imprimi o Array no console

console.log(valores.pop())
// Retira o ultimo valor do Array e retorna
delete valores[0]
// Deleta valor do Array
console.log(valores)

console.log(typeof valores)
//Object