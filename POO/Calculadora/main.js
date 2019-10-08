class Calculadora {
    constructor(){
        // Atributos
        this.nums = [12, 2, 2];
        this.tipo = '/';

        if (this.tipo == '+') {
            this.soma();
        } else if (this.tipo == '-') {
            this.subtracao();
        } else if (this.tipo == '*') {
            this.multiplicacao();
        } else if (this.tipo == '/') {
            this.divisao();
        }
    }

    //Métodos
    
    soma() {
        const resultadoSoma = this.nums.reduce((total, proximo) => total + proximo);
        console.log(resultadoSoma);
    }

    subtracao() {
        const resultadoSubtracao = this.nums.reduce((total, proximo) => total - proximo);
        console.log(resultadoSubtracao);
    }

    multiplicacao() {
        const resultadoMultiplicao = this.nums.reduce((total, proximo) => total * proximo);
        console.log(resultadoMultiplicao)
    }

    divisao() {
        const resultadoDivisao = this.nums.reduce((total, proximo) => total / proximo);
        console.log(resultadoDivisao)
    }
}

new Calculadora();



