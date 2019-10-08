var Animal = {
    tipo: 'Invertebrados',
    qualtipo: function() {
        console.log(this.tipo)
    }
}

var peixe = Object.create(Animal)

peixe.tipo = 'Peixes'
peixe.qualtipo()