const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let indice in numeros) {
    if (indice == 5) {
        break// O break não age no if, ele vai agir no bloco for, while ou switch mais próximo dele 
    }
    console.log(`${indice} = ${numeros[indice]}`)
}

for (let indice in numeros) {
    if (indice == 5) {
        continue
    }
    console.log(`${indice} =  ${numeros[indice]}`)
}

rotulo: for(let indice in numeros) {
    for (let inidice2 in numeros) {
        if (indice == 2 && inidice2 == 3) {
            break rotulo
        }
        console.log(`Par = ${indice}, ${inidice2}`)
    }
}