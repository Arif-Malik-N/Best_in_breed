import React from 'react'

const SignIn = () => {
  return (
    <div className='bg-primary-500 h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-primary-800 mb-4'>Sign In</h1>
        <p className='text-gray-600'>Welcome to Best In Breed</p>
        <button className='btn-primary mt-4'>Sign In</button>
      </div>
    </div>
  )
}

export default SignIn