const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega um caractere na String
console.log(escola.charAt(5)) // Pega um caractere na String
console.log(escola.charCodeAt(3)) // Pega um caractere na String e transforma em ASCII
console.log(escola.indexOf('3')) // Mostra a posição do caractere especificado

console.log(escola.substring(1)) // Gera uma subString a partir da posição solicitada
console.log(escola.substring(0, 3)) // Gera uma subString a partir da posição solicitada e o final solicitado

console.log('Escola '.concat(escola.concat("!"))) // Concatena String
console.log(escola.replace(3, 'e')) // Substitui caracteres 

console.log('Ana,Maria,Pedro'.split(',')) // Sepera em vetor a partir de um seletor