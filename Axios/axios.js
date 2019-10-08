axios.get('https://api.github.com/users/diego3g/repos')
    .then(function(response){ 
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error)
    })
