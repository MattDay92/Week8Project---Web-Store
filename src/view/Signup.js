import React, {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'

export default function Signup() {
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        const reqBody = {
            username: username,
            email: email,
            password: password
        }
        
    
        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json'
            }
        }
    
        console.log(url, options)
        if (password!==confirmPassword) {
            console.log('Your passwords do not match.  Please try again.  ')
        }
        
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            setRedirect(true)
        }
    };
    

    return redirect?<Navigate to='/login' />:
    (
    <div>
        <div className='text-center my-5'>
            <h1>Create an Account</h1>
            <div className='d-flex justify-content-center text-center'>

                <form className='col-4' onSubmit={handleSubmit}>
                    <input className='form-control' type='text' name='username' placeholder='Username' />
                    <input className='form-control' type='text' name='email' placeholder='Email' />
                    <input className='form-control' type='password' name='password' placeholder='Password' />
                    <input className='form-control' type='password' name='confirmPassword' placeholder='Confirm Password' />                    
                    <button className='btn btn-primary' type='submit'>Sign Up</button>
                </form>

            </div>
        </div>
    </div>
  )
}
