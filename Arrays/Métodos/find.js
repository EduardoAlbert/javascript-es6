const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const find = array.find(function(item) {
    return item === 10;
});

if (find == undefined) {
    console.log('O número não existe')
} else {
    console.log('O número '+ find +' existe')
}