const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Waiting 2 seconds'), 2000);
})

const exibePromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

exibePromise();
