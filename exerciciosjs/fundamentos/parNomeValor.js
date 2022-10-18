// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contextg léxico 2
    return saudacao
}

// Objetos são grupos alinhados de chave valor de pares nomes/valor
const cliente = {
    nome: 'João',
    idade: 28,
    peso: 86.9,
    endereco: {
        logradouro: 'QNL 29 Conjunto 12',
        numero: 8
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)