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
        data = res_data.data

        const dataAll = data.map(obj => `<ul id="names">${obj.first_name}</ul>
        <img id="avatar" src=${obj.avatar}></img>`);        
        console.log(dataAll)

        document.getElementById("dataset").innerHTML = dataAll.join('');
        
    })
    .catch(error => console.log(error))

    function displayItems(data) {
        var allNames = data.map(obj => obj.first_name);
        //console.log(allNames);
        const nameDiv = document.getElementById("names");// mention the division

        const nameList = document.createElement("h3");
        nameList.innerHTML = allNames;
        //nameDiv.appendChild(nameList);
      }