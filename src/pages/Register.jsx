import React from 'react'
// import { Link } from "react-router-dom";
import Add from "../img/addAvatar.png"

function Register() {
  return (
      <div className="formContainer bg-slate-600">
          <div className="formWrapper">
              <span className="logo">Chat Hub</span>
              <span className="title">Register</span>
              <form>
                  <input required type="text" placeholder="display name" />
                  <input required type="email" placeholder="email" />
                  <input required type="password" placeholder="password" />
                  <input required style={{ display: "none" }} type="file" id="file" />
                  <label htmlFor="file">
                      <img src={Add} alt="" />
                      <span>Add an avatar</span>
                  </label>
                  <button className='bg-slate-600'>Sign up</button>
              </form>
              <p>
                You do have an account? Login
              </p>
          </div>
      </div>
  )
}

export default Register
