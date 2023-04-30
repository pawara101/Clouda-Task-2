//Resreq API
const { error } = require('console');
const fetch = require('node-fetch');
const url = 'https://reqres.in/api/users';

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Reques Failed ${response.status}`)
        }
        console.log(response.status)
        return response.json()
    })
    .then(data =>{
        console.log(data)
    })
    .catch(error => console.log(error))