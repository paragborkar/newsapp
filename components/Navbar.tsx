import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pb-4 border-b mb-4' >
        <div>
            <Link href={"/"} className='text-4xl font-bold tracking-tighter text-dark'><h1>Tech News</h1></Link>
        </div>
        <div className='flex items-center'>
            <Link href={"/sign-in"} className='btn' >Sign In</Link>
        </div>
    </div>
  )
}

export default Navbar
