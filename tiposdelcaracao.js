/* a função na forma tradicional, coloca a função numa situação
onde não importa em qual parte do codigo eu tente printar ela
ela vai aparecer igual, pois o compilador do js le todas
as funções declaradas dessa forma primeiro */

//function declaration(forma tradicional)
function soma(x, y) {
    return x + y
}

console.log(soma(2, 3));

//function expression (função anonima) armazenada em uma variavel

const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 2));

