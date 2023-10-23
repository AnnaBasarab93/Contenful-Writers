import axios from "axios";
import React, { useEffect, useState } from "react";

const RegistrationForm = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading]=useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async(e) => {
    try{
        e.preventDefault();
      setLoading(true); 
    let config = {
        url: "http://localhost:8000/api/register",
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(username, email, password),
    }}catch(error){
    console.log("Error to fetch data");
  }finally{
   setLoading(false)
} 
  }

return(
<>
<div>
   <form onSubmit={register}>
            <label>Username:</label>
            <input onChange={(e) => setUsername(e.target.value)} type='text' id='username' name='username' value={username} required></input>
            <label>E-Mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" value={email} required></input>
            <label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' value={password} required></input>
            <input type='submit' value='Login'></input>
        </form>
    </div>
    </>)
}
;

export default RegistrationForm