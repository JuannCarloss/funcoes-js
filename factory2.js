/*neste exemplo de function factory, passei parametros padroes
e apenas no consolelog passo seus valores, assim criando 
varios objetos com apenas uma função */

function criarProduto(nome, preco) {
    return {
        nome:  nome,
        preco: preco
    }
}

console.log(criarProduto('carro', 222));
console.log(criarProduto('notebook', 333));
console.log(criarProduto('casa', 444));