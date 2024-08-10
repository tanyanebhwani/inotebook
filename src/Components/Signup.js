import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const [user, setUser] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate();
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch('https://inotebook-z6r2.onrender.com/api/auth/createUser',{
            method:'POST',
          headers:{
            'Content-type':'application/json',
          },
        body: JSON.stringify({name:user.name,email:user.email,password:user.password})});
        const json = await response.json();
        console.log(json);
        if(json.success)
            {
                localStorage.setItem('token',json.authtoken);
                navigate("/");
                props.showAlert("Account created successfully","success");
            }
            else
            {
                alert("Invalid Credentials");
                props.showAlert("Invalid details","danger");
            }
    }
  return (
    <div className='mt-3'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required minLength={5}/>
                </div>
                <button disabled={user.name<5||user.password<5||user.password!==user.cpassword||user.password<5} type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Signup