class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }


    falar() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const p1 = new Pessoa ('joao', 45)
p1.falar()

