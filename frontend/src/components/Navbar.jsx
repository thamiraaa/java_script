import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
       <nav>
          <div className="flex justify-around bg-blue-400 text-gray-300 text-xl p-4 ">
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Link to='/service'>Service</Link>
               <Link to='/contact'>Contact</Link>
          </div>
       </nav>
    </>
  )
}

export default Navbar