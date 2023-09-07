import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <span className="logo">Chat Hub</span>
        <div className="user">
          <img src='' alt="" />
          <span></span>
          <button>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
