import React from 'react'
import "../App.css"
const Login = () => {
    return (
        <div>
            <div className='loginParent'>
                <form className='loginForm'>
                    <h1>Welcome Back</h1>
                    <h3>Login Page</h3>

                    <br /> <input type='text' required placeholder='Name' name='name' onChange={(e) => (e.target.name)} />
                    <br />  <input type='number' required placeholder='Phone Number' name='phoneNumber' onChange={(e) => (e.target.name)} />
                    <br />   <input type='email' required placeholder='Email' name='email' onChange={(e) => (e.target.name)} />
                    <br />  <input type='password' required placeholder='Password' name='password' onChange={(e) => (e.target.name)} />
                    <br />   <button>Submit</button>
                </form>
                <div className='loginImage'>
                    <h1>Welcome Image</h1>

                </div>
            </div>
        </div>
    )
}

export default Login