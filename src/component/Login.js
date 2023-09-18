import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()

    return (
        <div>
            <div className='loginParent'>
                <form className='loginForm'>
                    <h1>Welcome Back</h1>
                    <h3>Login Page</h3>

                    <br />   <input type='email' required placeholder='Email' name='email' onChange={(e) => (e.target.name)} />
                    <br />  <input type='password' required placeholder='Password' name='password' onChange={(e) => (e.target.name)} />
                    <br />   <button>Submit</button>  <br></br>
                    <button type='button' style={{ margin: "10px" }} onClick={() => nav("/register")}>Create Account</button>

                </form>
                <div className='loginImage'>
                    <h1>Welcome Image</h1>

                </div>
            </div>
        </div>
    )
}

export default Login