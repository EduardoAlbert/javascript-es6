class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }


}

const figura = new Retangulo(2, 3);

console.log(`A area deste retangulo é de ${figura.area}`)
