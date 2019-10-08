Dados = {nome:'Eduardo', 
idade:18, 
estado:'São Paulo', 
peso:66.8, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

Dados.engordar(2)

console.log(`O seu nome é ${Dados.nome}, 
você tem ${Dados.idade} anos,
mora no estado de ${Dados.estado}
e pesa ${Dados.peso}`)
