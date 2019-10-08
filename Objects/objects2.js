const Objeto = {
    'key 1' : 'Value 1',
    'key2' : 'Value 2',
};

console.log(Objeto)

// Quando a chave tiver espaços ou caracteres especiais é melhor usar os: []
console.log(Objeto['key 1']);

console.log(Objeto.key2);

Objeto.ano = 2019;

console.log(Objeto);

console.log(Objeto.ano);

delete Objeto["key 1"];

console.log(Objeto)

