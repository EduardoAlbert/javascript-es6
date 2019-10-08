/*let cardapio = ['Pizza', 'Hamburguer', 'Refrigerante', 'Coxinha', 'Pão de Queijo']
let pos = 0

for (let c = 0; c < cardapio.length; c++) {
    pos++
    console.log(`${pos}º - ${cardapio[c]}`)
}*/

/*let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primero valor do vetor é ${num[0]}`)

let c = 0
do {
    console.log(num[c])
    c++
} while (c < num.length) */

let valores = [8, 1, 7, 9, 2]
console.log(valores.indexOf(3))

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${c} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(7)
console.log(`A posição do elemento 7 é ${pos}`)


