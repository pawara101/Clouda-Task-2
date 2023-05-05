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

    function displayItems(data) {
        const firstName = data.first_name
        const nameDiv = document.getElementById("names");// mention the division

        const nameList = document.createElement("h3");
        nameList.innerHTML = firstName;
        nameDiv.appendChild(nameList);
      }