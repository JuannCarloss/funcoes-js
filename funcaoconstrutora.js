/*aqui criei uma função carro com parametros padroes
recebendo uma variavel em seu escopo, em seguida
crio uma função no escopo global usando this */

function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    /*aqui, ainda dentro da função carro, usando this
    novamente, jogo a função pro escopo global, pra poder
    printar seu resultado no console log, essa função é
    responsavel por puxar a velocidade atual do carro*/
    //metodo publico

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
  
}

    /*aqui, crio um objeto "uno" integrado a função carro, que recebe
    todos os valores passados dentro dele, em seguida uso a 
    notação ponto para adicionar a aceleração ao meu objeto
    em seguida, com o console log, passo a função responsavel
    por conter os valores da minha velocidade atual */
    const uno = new Carro()
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())