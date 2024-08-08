import React, { useState } from 'react'
import {API_URL} from '../data/apipath'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

 const handlesubmit = async(e)=>{
  e.preventDefault();


  if(!username || !email || !password){
    alert("please fill in all the feilds")
    return;
  }
  try{
    const responce = await fetch(`${API_URL}/vendor/Register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username,email,password})
    });

    const data = await responce.json();
    if(responce.ok){
      console.log(data);
      alert("registation successfull")
      navigate('/Login')
    }
    else if(email){
      alert("email already taken");
      setUsername("");
      setEmail("");
      setPassword("");
    }
    else {
      setUsername("");
      setEmail("");
      setPassword("");
    }
  }catch(error){
    console.error("registation failed",error);
    alert("registation failed");
  }
 }


  return (
    <div className='Register'>
      <form onSubmit={handlesubmit}>
        <h5>username</h5>
        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username' />
        <h5>email</h5>
        <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
        <h5>password</h5>
        <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
        <div className='btn-submit'>
          <button type='submit'>submit</button>

        </div>
      </form>
      
    </div>
  )
}

export default Register;