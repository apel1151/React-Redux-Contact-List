import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
            <Link to="/" className='navbar-brand ms-5'>
                 React Redux Contact App           
            </Link>
    </nav>
  )
}

export default Navbar