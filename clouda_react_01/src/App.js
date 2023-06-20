import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://reqres.in/api/users")
          .then((response) => {
            console.log(response.json())
          })
          .then((data) => setUser(data));

  }
  
  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
    </main>
  );
}

export default App;
