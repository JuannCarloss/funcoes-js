/*class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    falar() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const p1 = new Pessoa ('joao', 45)
p1.falar()*/

/*acima um exemplo de obj criado apartir de uma classe, usando
o this para colocar seus atributos no escopo global*/

/*function Pessoa (nome, idade){
        this.nome = nome
        this.idade = idade


    this.falarNome = function() {
        console.log(`meu nome é ${this.nome}`);
    }

    this.falarIdade = function () {
        console.log(`minha idade é ${idade}`);
    }
}

const p2 = new Pessoa ('joao', 45)
p2.falarNome()
p2.falarIdade()*/

/*acima, muito parecido com a class, porem usando função */

function Prod (nome, valor, desconto) {
        this.nome = nome
        this.valor = valor
        this.desconto = desconto
        this.valorFinal = valor - desconto

    this.dizer = function() {
        console.log(`o ${nome} custa ${valor} e com o desconto de ${desconto} seu valor fica ${this.valorFinal}`);
    }
}


const prod1 = new Prod ('notebook', 2000, 100)
prod1.dizer()

/*aqui, um exemplo que fiz como pratica por fora da aula,
usei um parametro como desconto do valor do produto, nao pude
passar valorFinal no parametro padrao da função se não seu
valor seria sempre undefined, passo ele direto como atributo
e na template string uso this.valorFinal

No seu código, você está definindo valorFinal como um atributo
dentro do construtor usando this.valorFinal = valor - desconto.
Isso significa que valorFinal se torna um atributo da instância
do objeto Prod, acessível através de this.valorFinal.

Ao chamar a função dizer(), você precisa se referir ao atributo
valorFinal definido na instância atual, e não a uma variável
local com o mesmo nome. Para fazer isso, você precisa usar 
this.valorFinal na template string.

Se você usasse apenas valorFinal na template string,
isso se referiria a uma variável local, que não foi definida na
função dizer(), e portanto resultaria em undefined.
Usando this.valorFinal, você está se referindo ao atributo
definido na instância atual e acessível através de this.

*/