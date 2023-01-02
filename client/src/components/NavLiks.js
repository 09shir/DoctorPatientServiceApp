import React from 'react'
import { Link } from 'react-router-dom'

const NavLiks = () => {
  return (
    <nav className='flex justify-center text-xl mt-2'>
        <Link to={'/'}><p className='bg-teal-400 w-20 text-center h-8 rounded-xl cursor-pointer'>Home</p></Link>
        <Link to={'/createyourpost'}><p className='mx-4 bg-teal-400 w-20 text-center h-8 rounded-xl cursor-pointer'>Create</p></Link>
        <Link to={'/profile'}><p className='bg-teal-400 w-20 text-center h-8 rounded-xl cursor-pointer'>Profile</p></Link>
        <Link to={'/'}><p className='mx-4 bg-red-500 w-20 text-center h-8 rounded-xl cursor-pointer' onClick={localStorage.setItem('_appSignging', false)}>Logout</p></Link>
    </nav>
  )
}

export default NavLiks