const array = [1, 2, 3, 4, 5, 6]

// function anônima normal

/*const newArray = array.map(function(item) {
    return item * 2;
});*/

//arrow functions  () =>

//quando só 1 argumento, não precisa usar (parênteses)

//const newArray = array.map(item => item * 2);

//const newArray = array.map((item, index) => `Pos ${index} - Dobro: ${item*2}`)

//console.log(newArray)


const teste = (nome='Não definido') => 'Teste ' + nome;

// quando for pra retornar objetos, usa-se (parênteses)
const teste2 = () => ({nome:'Eduardo'});

console.log(teste())