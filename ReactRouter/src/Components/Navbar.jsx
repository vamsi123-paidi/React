import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='dashboard'>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
