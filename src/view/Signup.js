import React from 'react'

export default function Signup() {
  return (
    <div>
        <div className='text-center'>
            <h1>Sign Up</h1>
            <div className='d-flex justify-content-center text-center'>

                <form className='col-4'>
                    <input className='form-control' name='username' placeholder='Username' />
                    <input className='form-control' name='password' placeholder='Email' />
                    <input className='form-control' name='password' placeholder='Password' />
                    <input className='form-control' name='password' placeholder='Confirm Password' />                    
                    <button className='btn btn-primary' type='submit'>Sign Up</button>
                </form>

            </div>
        </div>
    </div>
  )
}
