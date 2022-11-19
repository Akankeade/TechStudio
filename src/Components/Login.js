import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='Login'>
      <div className="container  mb-5 log">
        <h3>Login</h3>

        <div className='email'>
          <label className='mb-2' htmlFor="email">Email</label> <br />
          <input className='mb-3' type="email" name="" id="" placeholder='e.g name@example.com' />
        </div>

        <div className='email'>
          <label className='mb-2' htmlFor="password">Password</label> <br />
          <input className='mb-3' type="password" name="" id="" />
        </div>


        <button className='mb-2'>Continue</button>
        <br />
        {/* eslint-disable-next-line */}
        <a href="">Forget Your Password?</a>


      </div>
    </div>
  )
}

export default Login