import { useState } from 'react';
import './App.css';

function App() {
const [name,setName]=useState('')
const [isName,setIsName]=useState(true)
const [email,setEmail]=useState('')
const [isEmail, setIsEmail]=useState(true)
const [pass, setPass]=useState('')
const [isPass, setIsPass]=useState(true)
const [phone, setPhone]=useState('')
const [isPhone, setIsPhone]=useState(true)

const validateName=(e)=>{
  const {value}=e.target 
  if (value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
  )){
    setIsName(true);
    setName(value);
  }
  else
  {
    setIsName(false);
    setName(value);
  }
}

const validateEmail=(e)=>{
  const {value}=e.target
  if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
    setIsEmail(true);
    setEmail(value);
  }
  else
  {
    setIsEmail(false);
    setEmail(value); 
  }
}

const validatePass=(e)=>{
  const {value}=e.target
  if(value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
    setIsPass(true);
    setPass(value);
  }
  else
  {
    setIsPass(false);
    setPass(value); 
  }
}

const validatePhone=(e)=>{
  const {value}=e.target
  if(value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
    setIsPhone(true);
    setPhone(value);
  }
  else{
    setIsPhone(false);
    setPhone(value)
  }
}

const submit=(e)=>{
  e.preventDefault()
  if(name && email && pass && phone){
    alert('Registration Successfull!')
    setName('')
    setEmail('')
    setPass('')
    setPhone('')
  }
  else{
    alert("Please Fill All The Fields")
  }
}
  
  return (
    <div className="App">
      <div className='head'>
          <h2 className='title text-white'>Time to kick off! ⚽</h2>
          <p className='welcome text-white'>Get ready to kick off an exciting journey!.<br></br>
            Join the league of passionate football enthusiasts.<br></br> 
            Register for turf access and be a part of something special.</p>
      </div>
      <div className='container'>
        <form onSubmit={submit}>
        <div className='form'>
          <div className='set'>
            <label htmlFor='name' className='name'>Name</label> <br></br>
            <input className='name-box' type='text' id='name' placeholder='Enter Your Name' onChange={(e)=>{validateName(e)}} value={name} /><br></br>
           {!isName &&<div>
              <p className='validation'>*Invalid Input</p>
            </div>}
          </div>
          <div className='set'>
            <label htmlFor='email' className='name'>Email</label> <br></br>
            <input value={email} className='name-box' type='email' id='email' placeholder='Enter Your Email' onChange={(e)=>{validateEmail(e)}}/><br></br>
            { !isEmail &&<div>
              <p className='validation'>*Invalid Input</p>
            </div>}
          </div>
         <div className='set'>
            <label htmlFor='password' className='name'>Password</label> <br></br>
            <input className='name-box' type='password' id='password' placeholder='Enter The Password' onChange={(e)=>{validatePass(e)}} value={pass}/><br></br>
            {!isPass &&<div>
              <p className='validation'>*Invalid Input</p>
            </div>}
         </div>

          <div className='set'>
            <label htmlFor='phone' className='name'>Phone</label> <br></br>
            <input className='name-box' type='tel' id='phone' placeholder='Enter The Number' onChange={(e)=>{validatePhone(e)}} value={phone}/><br></br>
            {!isPhone &&<div>
              <p className='validation'>*Invalid Input</p>
            </div>}
          </div>
          <div className='reg'><button type="submit" className="btn btn-success text-white" disabled={isName && isName && isPass && isPhone ?false:true} >Register</button></div>
        </div>
        </form>


      </div>

    </div>
  );
}

export default App;
