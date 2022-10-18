// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(6, 9);
imprimirSoma(5) // NaN
imprimirSoma(2, 3, 4, 5, 6)

function soma(a, b = 1) {
    return a + b
}

console.log(soma(1,2))
console.log(soma(5))
console.log(soma())// NaN