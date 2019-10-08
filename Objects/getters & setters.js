var Usuarios = [
    {
        nome: 'Eduardo',
        idade: 18
    }, 
    {
        nome: 'João',
        idade: 19
    }, 
    {
        nome: 'Maria',
        idade: 21
    }
];

var Usuario = {
    posicao: 0,

    get atual() {
        return Usuarios[this.posicao]
    },

    set atual(pos) {
        this.posicao = pos
    },

    get proximo() {
        return ++this.posicao
    },

    get anterior() {
        return --this.posicao
    }
        
}

console.log(Usuario.atual)

Usuario.proximo;

console.log(Usuario.atual);

Usuario.proximo;

console.log(Usuario.atual);

Usuario.anterior;

console.log(Usuario.atual);

Usuario.atual = 0;

console.log(Usuario.atual);
