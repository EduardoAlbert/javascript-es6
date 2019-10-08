/* function Usuario() {
    this.nome = 'Ayrton'
    this.idade = 27;
    this.soma = function(a, b) {
        return a + b;
    }
}

let usuario = new Usuario();
console.log(usuario.nome) */
  
function Personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log(this)
}

let personagemThis = {
    nome: 'Teshima'
}

Personagem.call(personagemThis, 1, 2, 'modo call');

Personagem.apply(personagemThis, [1, 2, 'modo apply']);

let per = Personagem.bind(personagemThis, 1, 2, );

per('modo bind')