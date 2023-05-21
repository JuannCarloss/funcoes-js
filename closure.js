/*closure é o escopo criado quando uma função é declarada,
esse escopo permite a função acessar e manipular variaveis
externas a função */

const x = 'global'

function fora() {
    const x = 'local' 
    function dentro () {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

/*no caso acima, passei um exemplo de closure, mesmo a const x
no escopo geral ter sido declarada como global, por conta do closure
que significa "proximo", a função "dentro" na função "fora",
puxa o valor de x dentro da função "fora", pois é a mais proxima
a ela*/