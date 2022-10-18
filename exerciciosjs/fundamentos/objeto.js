const prod1 = {}
prod1.nome = 'Google Home'
prod1.preco = 3840.82
prod1['Desconto legal'] = 0.4 // evitar atributos com espaço

// console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
