const peso1 = 1.0
const peso2 = Number('2.1') // se fosse 2.1, por exemplo, o isInteger daria falso

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))

const avalicao1 = 6.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Reduz o número de casas decimais
console.log(media.toString(2)) // Transforma o Number em um valor binário 
console.log(typeof media)
console.log(typeof Number)