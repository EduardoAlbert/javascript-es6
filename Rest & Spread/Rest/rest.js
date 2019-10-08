// Pega o resto de um objeto, etc...

/*function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7))
*/

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'    
};

const { nome, ...outras} = usuario1;

console.log(nome);
console.log(outras);
