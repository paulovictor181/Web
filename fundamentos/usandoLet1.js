let numero = 1
// let possui escopo de bloco, global e função 
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)