const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

somaArray = array.reduce(function(primeiro, segundo) {
    return primeiro + segundo;
});

console.log(somaArray)
