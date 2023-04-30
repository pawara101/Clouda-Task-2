//Resreq API
const { error } = require('console');
const fetch = require('node-fetch');
const url = 'https://reqres.in/api/users';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));