import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul>
      <Link to='/'>Home</Link>
      <Link to="/about">About</Link>
      <Link to='/staff'>Staff</Link>
      <Link to='/paths'>Paths</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  </div>
)

export default Header