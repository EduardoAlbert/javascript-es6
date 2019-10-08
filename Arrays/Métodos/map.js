const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

dobroMenoresQue10 = array.map(item => item * 2).filter(item => item < 10).reduce((total, prox) => total + prox);
console.log(dobroMenoresQue10)

/*const dbarray = [];

const dobroDoArray = array.map(function(item, index) {
    if (item % 2 == 0) {
        dbarray.push(item + '-');
        dbarray.push('Posição: ' + index)
    }
});

console.log('Lista com os pares: ' + dbarray)*/


//const map = array.map(function(item, index) {
 //   return console.log(item, index)
//})

const map = array.map(function(item, index) {
    return console.log(`Posição ${index} - ${item}`)
})

const map2 = array.map((item, index) => console.log(`Posição ${index} - ${item}`));