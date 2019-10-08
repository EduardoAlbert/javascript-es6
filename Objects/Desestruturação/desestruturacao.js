/* const Usuario = {
    nome:'Eduardo',
    idade:18,
    endereco: {
        cidade:'São Paulo',
        estado:'SP'
    }
}

const { nome, idade, endereco: { cidade }} = Usuario;

console.log(cidade); */

const Pessoa = {
    nome: 'Eduardo',
    idade: 18,
    sexo: 'Masculino',
    endereco: {
        rua: 'Rua Antônio Gonçalves',
        numero: '99'
    }
}


const Pessoa2 = {...Pessoa, 
    nome: 'João', 
    endereco: {...Pessoa.endereco,
         numero: '23',
         cidade: 'São Paulo', }}

console.log(Pessoa)
console.log(Pessoa2)