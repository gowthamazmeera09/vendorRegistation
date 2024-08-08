import React, { useState } from 'react'
import { API_URL } from '../data/apipath';
import {useNavigate} from 'react-router-dom'


function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginhandlesubmit = async (e)=>{
    e.preventDefault();

    if(!email || !password){
      alert("please fill in all the feilds");
    }
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
        localStorage.setItem('logintoken',data.token);
        alert("login successful");
        navigate('/Home')
      }
      else if(!responce.ok){
        alert("incorrect email or password");
      }
      

    }catch(error){
      console.error('login failed',error);

    }
  }
  return (
    <div className='Login form'>
      <form onSubmit={loginhandlesubmit}>
        <h5>Email</h5>
        <input type='text'name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        <h5>password</h5>
        <input type='text'name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
        <div className='btn-submit'>
          <button type='submit'>
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;