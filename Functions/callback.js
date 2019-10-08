var sum = (a, b, def) => {
    return def( a + b )
};

var mult = (total) => {
    return total * 2
}

console.log(sum(2, 3, mult));

console.log(sum(2, 3, function(total) {
    return total / 2
}));
