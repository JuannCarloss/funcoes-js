function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

const carro = {
    preco: 49990, desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '$']));

/*Tanto o método call() quanto o método apply() permitem 
que você execute uma função em um objeto específico,
definindo o valor de this dentro da função. A principal 
diferença entre eles é a maneira como você passa os argumentos
para a função. 

O método call() aceita uma lista de argumentos separados 
por vírgula, enquanto o método apply() aceita um array de 
argumentos. Isso significa que, com o call(), você precisa 
passar explicitamente cada argumento como um argumento 
separado, enquanto com o apply(), você pode passar um array 
de argumentos e ele será descompactado para a função.

Observe que o primeiro argumento tanto do call() quanto 
do apply() é o objeto que você deseja que seja o this dentro 
da função. Depois, você passa os argumentos da função, seja 
como argumentos separados no call() ou como um array no 
apply().

Em resumo, a principal diferença entre call() e apply() 
é a forma como os argumentos são passados para a função. 
e você tiver um número fixo de argumentos, o call() pode 
er mais fácil de usar. Se você tiver um número variável de 
argumentos, o apply() pode ser mais conveniente.
*/