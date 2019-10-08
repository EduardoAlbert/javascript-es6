const Cadastros = {
    
    Pessoa1 : {
        nome: 'Eduardo',
        idade: 18,
        sexo: 'Masculino',
        endereco: {
            rua: 'Rua Antônio Gonçalves',
            numero: '99',
            cidade: 'São Paulo',
            cep: '48330-000'
        },
        escolaridade : 'Ensino Médio'
    },

    Pessoa2: {
        nome: 'João',
        idade: 18,
        sexo: 'Masculino',
        endereco: {
            rua: 'Rua Antônio Gonçalves',
            numero: '99',
            cidade: 'São Paulo',
            cep: '48330-000'
        },
        escolaridade : 'Ensino Médio'
    },
     
    Pessoa3: {
        nome: 'Marcos',
        idade: 18,
        sexo: 'Masculino',
        endereco: {
            rua: 'Rua Antônio Gonçalves',
            numero: '99',
            cidade: 'Rio de Janeiro',
            cep: '48330-000'
        },
        escolaridade : 'Ensino Médio'
    }
};

for (let pessoa in Cadastros) {
    if (Cadastros[pessoa].endereco.cidade == 'São Paulo') {
        console.log(`${Cadastros[pessoa].nome} mora em São Paulo`)
    }
}
 