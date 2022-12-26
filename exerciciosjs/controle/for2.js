const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Sousa',
    idade: 20,
    peso: 55.7
}

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`)
}