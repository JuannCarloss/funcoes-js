const pessoa = {
    saudacao: 'bom dia!',
    nome: 'meu nome é pedro',
    falar() {
        console.log(this.saudacao)
    }
} 

pessoa.falar()


pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/*no exemplo acima, declara-se a var pessoa, passando
sua função de falar com a notação ponto e logo em seguida
o bind com a var pessoa, para amarrar a função falar
para a variavel falarDePessoa */