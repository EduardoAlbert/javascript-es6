const Usuario = {
    nome:'Eduardo',
    idade:18,
    endereco: {
        cidade:'São Paulo',
        estado:'SP'
    }
}

const Usuario2 = {
    nome:'Diego',
    idade:23,
    endereco: {
        cidade:'Rio Grande do Sul',
        estado:'SC'
    }
}

var mostraInfo = ( { nome, idade, endereco: { cidade, estado } } ) => {
    console.log(`${nome} é de ${cidade}-${estado} e tem ${idade} anos`);
}

mostraInfo(Usuario)
mostraInfo(Usuario2)

