const fabricantes = ['mercedes', 'audi', 'bmw', 'mazda', 'toyota']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

/*neste exemplo, a função de callback é printada
novamente pra cada elemento dentro do array */

const notas = [7.7, 2.3, 5.2, 9.8, 4.2, 8.4]

function impirmir(nota, indice) {
    if (nota < 7){
        console.log(`${indice + 1}. ${nota}`)
    }
}

notas.forEach(impirmir)

//outro exemplo mais curto de callback

const notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)