var NovoUsuario = {
    nome: {
        primeiro: 'Ayrton',
        segundo: 'Jesus',
        ultimo: 'Teshima'
    },

    idade: 27,
    pais: 'Brasil'
};


// Armazenando os dados de novoUsuario em novas variáveis com desestruturação
const { nome: { primeiro: userName, segundo = 'Não tem', ultimo: finalName}, idade: userAge, pais: userCountry } = NovoUsuario;

let secondName = segundo

console.log(userName);
console.log(secondName);
console.log(finalName);
console.log(userAge);
console.log(userCountry)


