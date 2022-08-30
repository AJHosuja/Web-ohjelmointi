import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky flex top-0 w-full h-20 bg-black text-white justify-center items-center'>
        <Link to={"/"}>
          <h1 className="text-3xl">Food recipe library</h1>
        </Link>
    </div>
  )
}

export default Navbar