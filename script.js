//Resreq API

//const fetch = require('node-fetch');
const url = 'https://reqres.in/api/users';

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error(`Reques Failed ${response.status}`)
        }
        return response.json()
    })
    .then(res_data =>{
        //console.log(res_data);
        //console.log(res_data.data)
        data = res_data.data
        //console.log(data)

        for (var i=0; i<data.length;i++){
            console.log(data[i].first_name)
        }
        
    })
    .catch(error => console.log(error))