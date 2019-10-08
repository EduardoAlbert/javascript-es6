const Obj1 = {
    nome: 'Eduardo',
    idade: 18
}

const Obj2 = {
    cidade: 'Rio de Janeiro',
    pais: 'Brasil'
}

Obj3 = Object.assign(Obj1, Obj2)

//spread
Obj4 = {...Obj1, 
    ...Obj2}

console.log(Obj3)

console.log(Obj4)
