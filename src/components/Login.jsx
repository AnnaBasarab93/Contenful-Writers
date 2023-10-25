import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login =() =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

const loginForm =async(e)=>{
    e.preventDefault();
    const payload = { email, password };
    setLoading(true);
try {
        const response = await axios.post('http://localhost:8000/api/register/login', payload, {
        headers: { 'Content-Type': 'application/json' }
        });
        console.log('response')
        const { token } = response.data;
        sessionStorage.setItem('jwt', token);
        setSuccess(true);
        setTimeout(() => {
        navigate('/');
        }, 3000);
}catch(error){
    console.log("Error to fetch data");
}finally{
    setLoading(false)
} 
}
    return(
        <>
        <div>
   <form onSubmit={loginForm} className='formBody'>
            <label>E-Mail:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" name="email" value={email} required></input>
            <label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' value={password} required></input>
            <input type='submit' value='Login'></input>
        </form>
    </div>
        </>
    )
}








export default Login