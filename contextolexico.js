/*a função sempre vai carregar consigo o contexto
onde ela foi escrita */


/*crio uma variavel com global como string e faço a função
para printar a mesma no console */
const valor = 'global'

function minhaFuncao () {
    console.log(valor);
}

/*mesmo fazendo outra função, e passando a primeira função
dentro dessa segunda, ela guarda o contexto onde foi declarada
e puxa o valor da primeira variavel */
function exec () {
    const valor = 'local'
    minhaFuncao()
}

exec()