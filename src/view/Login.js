import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

            
        const url = 'http://127.0.0.1:5000/api/login'
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+`:`+password)}`
            }
        }
    
        console.log(url, options)
        console.log(username, password)
        
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            setRedirect(true)
        }
    };
    

    return redirect?<Navigate to='/shop' />:
    (
        <div className='text-center my-5'>
            <h1>Log In</h1>
            <div className='d-flex justify-content-center text-center'>

                <form className='col-4'onSubmit={handleSubmit}>
                    <input className='form-control' name='username' placeholder='Username' />
                    <input className='form-control' name='password' type='password' placeholder='Password' />
                    <button className='btn btn-primary' type='submit'>Log In</button>
                </form>

            </div>
        </div>
    )
}
