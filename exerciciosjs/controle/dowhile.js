function getInteiroAleatoriamente(min, max) {
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatoriamente(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Terminou')