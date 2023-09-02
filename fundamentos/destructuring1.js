// Novo recurso do ES2015
// Operador Destructuring = Retira um valor de um objeto e inicializa ele fora do objeto 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome , idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logadouro, numero, cep } } = pessoa 
console.log(logadouro, numero, cep )

const 