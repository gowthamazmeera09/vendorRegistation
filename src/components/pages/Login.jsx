import React, { useState } from 'react'
import { API_URL } from '../data/apipath';
import { useNavigate } from 'react-router-dom';
import Register from './Register';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginhandlesubmit = async (e)=>{
    e.preventDefault();
    try{
      const responce = await fetch(`${API_URL}/vendor/Login`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
      });

      const data = await responce.json();
      if(responce.ok){
        alert("Login successful");
        localStorage.setItem('logintoken',data.token);
        navigate('/');


      }

    }catch(error){
      console.error('login failed',error)
    }
  }
  return (
    <div className='vendorLogin'>
      <form onSubmit={loginhandlesubmit}>
        <h5>Email</h5>
        <input type='text'name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        <h5>password</h5>
        <input type='text'name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
        <div className='btn-submit'>
          <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;