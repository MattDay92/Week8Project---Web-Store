import React from 'react'

export default function Login() {
    return (
        <div className='text-center'>
            <h1>Log In</h1>
            <div className='d-flex justify-content-center text-center'>

                <form className='col-4'>
                    <input className='form-control' name='username' placeholder='Username' />
                    <input className='form-control' name='password' placeholder='Password' />
                    <button className='btn btn-primary' type='submit'>Log In</button>
                </form>

            </div>
        </div>
    )
}
