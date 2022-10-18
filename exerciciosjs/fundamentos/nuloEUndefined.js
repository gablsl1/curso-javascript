let valor // não inicializada
console.log(valor) // o valor default da variável é undefined

valor = null
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.59
console.log(produto)

produto.preco = undefined // evite atribuir undefined 
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(produto)