import React from 'react'

function Login() {
  return (
    <div className="formContainer bg-slate-600">
        <div className="formWrapper">
            <span className="logo">Chat Hub</span>
            <span className="title">Login</span>
            <form >
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className='bg-slate-600' >Sign in</button>
                {/* {err && <span>Something went wrong</span>} */}
            </form>
            {/* <p>You don't have an account? <Link to="/register">Register</Link></p> */}
        </div>
    </div>
  )
}

export default Login
