const escola = 'Cod3r3' // Começa do indice 0 e não 1

console.log(escola.charAt(4))  // r
console.log(escola.charAt(5)) // Valor vazio
console.log(escola.charCodeAt(0)) // Retorna o valor na tabela Unidecode
console.log(escola.indexOf(3))
console.log(escola.lastIndexOf(3))

console.log(escola.substring(2))
console.log(escola.substring(3,5))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) // replace também aceita regex; substitui tudo pela letra e

console.log('Ana,Maria,José'.split(',')) // Gera um array a partir de uma String