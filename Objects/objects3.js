var NovoUsuario = {
    nome: 'Ayrton',
    idade: 27,
    pais: 'Brasil'
};

/* console.log(Object.keys(novoUsuario));
console.log(Object.values(novoUsuario)) */

var props = Object.keys(NovoUsuario); // retorna um array com as chaves
//console.log(props);

/* for (let i = 0; i < props.length; i++) {
    console.log(novoUsuario[props[i]])
} */

for (item in NovoUsuario) {
    console.log(NovoUsuario[item]);
}

//ou

for (item of Object.values(NovoUsuario)) {
    console.log(item)
}

