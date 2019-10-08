axios.get('https://pt.wikipedia.org/wiki/Steve_Wozniak')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })