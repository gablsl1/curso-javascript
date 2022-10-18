console.log(Math.ceil(5.1))

const obj1 = {}
obj1.nome = 'Boal'
// obj1['nome'] = 'Boal2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Teclado')
const obj3 = new Obj('Mouse')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()