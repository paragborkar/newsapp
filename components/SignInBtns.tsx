import Image from 'next/image'
import React from 'react'

const SignInBtns = () => {
  return (
    <>
      <h1 className='text-center mt-8 ' >Sign In</h1>
      <div className='mt-4 p-4 flex flex-col items-center justify-center gap-4' >
        <button className='flex items-center border p-4 rounded-md gap-4 hover:bg-slate-200 transition '>
            <span>
                <Image src={"/github-logo.svg"} width={30} height={30} alt='Github Logo' />
            </span>
            Sign In With GitHub
        </button>
      </div>
      <div className='mt-4 p-4 flex flex-col items-center justify-center gap-4' >
        <button className='flex items-center border p-4 rounded-md gap-4 hover:bg-slate-200 transition '>
            <span>
                <Image src={"/google-logo.svg"} width={30} height={30} alt='Google Logo' />
            </span>
            Sign In With Google
        </button>
      </div>
    </>
  )
}

export default SignInBtns
