/*factory simples, toda vez que printada pelo consolelog,
é instanciado um novo objeto, criado de forma literal
dentro da função */

function criarPessoa() {
    return {
        nome: 'ana',
        sobrenome: 'silva'
    }
}

console.log(criarPessoa());