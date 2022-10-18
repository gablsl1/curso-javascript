// Armazenando uma função em uma variável
const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,7))

// Retorno implícito
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a)

imprimir2('daospdjk')