/*function sum(x=0, y=0) {
    return x + y
}

res = sum(2, 2)
console.log(res)
*/

/*
function parImpar(n=0) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parImpar(3))*/

var fatorial = function(n) {
    fat = 1
    for (c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
