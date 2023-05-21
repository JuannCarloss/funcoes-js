//função em js é first-class object

//criar de forma literal
function fun1() {

}

//armazenar em uma variavel

const fun2 = function () {

}

// armazenar em um array

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// passar função como parametro
function run(fun) {
    fun()
}
/*aqui fun() é o parametro para string printar*/
run(function(){console.log('executando')})

//uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
/*aqui o 4 depois do soma equivale a function c*/
soma(2,3)(4)
//aqui armazenei dentro de uma variavel
let cincoMais = soma(2, 3)
cincoMais(4)