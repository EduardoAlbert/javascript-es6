const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Retorna itens em que a expressão é verdadeira
const filter = array.filter(function(item) {
        return item % 2 == 0 && item < 6;
});

console.log(filter)
