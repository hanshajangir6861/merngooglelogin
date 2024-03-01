import React from 'react'
import "./Login.css"

const Login = () => {

const loginwithgoogle = ()=>{
  window.open("http://localhost:4000/auth/google/callback" , "_self")
}

  return (
    <div className='login-page'>
      <h1 style={{ textAlign: 'center', }}>Login</h1>
      <div className='form'>
        <form action=''>
          <input type='text ' name='' id='name' placeholder='username' />
          <input type='password' name='' id='pass' placeholder='password' />
          <button>Login</button>
          <p className='message' >not registerd? <a href='#'>create a account</a></p>
        </form>
        <button className='login-with-google-btn' onClick={loginwithgoogle}>
          Sigin With Google
        </button>
      </div>

    </div>
  )
}

export default Login