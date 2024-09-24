import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <button>
        <NavLink to='contactus'>Contact-Us</NavLink>
      </button>
      <button>
        <NavLink to='address'>Address</NavLink>
      </button>
      <Outlet />
    </div>
  )
}

export default Contact
