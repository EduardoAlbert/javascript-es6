 const Usuario = {
     nome: 'Eduardo',
     digaOiPara(nome) { return `Olá ${nome}, meu nome é ${this.nome}, prazer em conhecê-lo!`} 
 }

 console.log(Usuario.digaOiPara('João'))
 