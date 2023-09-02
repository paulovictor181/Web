var numero = 1
// Var não respeita escopo de bloco
{
    var numero = 2
    console.log('dentro = ', numero)
}

// numero modificado para 2 
console.log('fora = ', numero)