import React, { useState, useEffect } from "react";
export default function ApiCall() {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const jsonData = await response.json();
        console.log("Data :",jsonData);
        setUser(jsonData.data);
      }
      catch(error){
        //console.log(error);
      };
    }
    
    useEffect(() => {
      fetchData();
    },[])
  return (
    <div>
      {user.length > 0 ? (
        <table className="Tab1">         
          {user.map(item => (
              <tr>
                <td className="Id">{item.id}</td>
                <td><img src={item.avatar} className="avatar"></img></td>
                <td className="Fname">{item.first_name}</td>
                <td className="email">{item.email}</td>
              </tr>
                 )
           )
           
             }
        </table>

      ) : (
        <p>Loading data...</p>
      )}
      
    </div>
  )
}
