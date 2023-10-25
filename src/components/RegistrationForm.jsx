import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading]=useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async(e) => {
    e.preventDefault();
    const payload = { username, email, password };
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/register', payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      if(response.status === 201 ){
        setTimeout(() => {
            navigate('/login');
        }, 3000);
      }
  }catch(error){
    console.log("Error to fetch data");
  }finally{
  setLoading(false)
} 
  }

return(
<>
<div>
   <form onSubmit={register} className='formBody'>
            <label>Username:</label>
            <input onChange={(e) => setUsername(e.target.value)} type='text' id='username' name='username' value={username} required></input>
            <br/>
            <label>E-Mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" value={email} required></input>
            <br/>
            <label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' value={password} required></input>
            <input type='submit' value='Login'></input>
        </form>
    </div>
    </>)
}
;

export default RegistrationForm