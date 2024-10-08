import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const [user, setUser] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://inotebook-z6r2.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, password: user.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Logged In successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }
    return (
        <div className="background">
            <div className="container">
                <div className='mt-3'>
                    <h2 id='loginHead'>LOGIN TO CONTINUE</h2>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className="mb-3 my-4">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 my-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                        </div>
                        <button type="submit" className="bttn btn-log-in">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
