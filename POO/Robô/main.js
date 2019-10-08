class Robo {
    constructor(nome = 'Sem nome') {
        this.nome = nome;
        this.acao = '';
    }

    andar(passos = 0) {
        this.acao = `${this.nome} andou ${passos} passos...`
        console.log(this.acao)
    }

    falar(texto = 'Olá') {
        this.acao = `${this.nome} falou: ${texto}...`
        console.log(this.acao)
    }

    virarEsquerda(graus) {
        this.acao = `${this.nome} virou ${graus}° à esquerda...`
        console.log(this.acao)
    }

    virarDireita(graus) {
        this.acao = `${this.nome} virou ${graus}° à direita...`
        console.log(this.acao)
    }
}

class SmartRobo extends Robo{

    pesquisar(assunto) {
        this.acao = `${this.nome} pesquisou: ${assunto}`
        console.log(this.acao)
    }
}


lary = new Robo('Lary')

lary.andar(2)
lary.virarEsquerda(45)
lary.virarDireita(50)
lary.falar('Hello, World Of POO!')

bob = new SmartRobo('Bob') 

bob.falar('Olá, Programador...')
bob.pesquisar('Javascript na internet')

