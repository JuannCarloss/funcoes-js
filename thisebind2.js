function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

/*no caso acima, preciso usar um bind(this) para amarrar
o this da primeira função (pessoa) na segunda função setInterval*/

new Pessoa


function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

/*no caso acima, armazeno o this em uma variavel na 
primeira função, e dentro do setInterval, declaro
a função ao invés do proprio thhis, fazendo com que
eu não precise usar a amarração bind(this)*/

new Pessoa