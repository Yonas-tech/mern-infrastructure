import React, { useState } from 'react'
import * as userService from '../../utilities/users-service'


export default function LoginForm({setUser}) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('')

    const handleChange = async (evt) => {
        setCredentials({
            ...credentials, 
            [evt.target.name]: evt.target.value
        })
    }


    async function handleSubmit(evt) {
        evt.preventDefault();
        try{
            const user = await userService.logIn(credentials)
            setUser(user)
        }catch(err) {
            setError('Log in Failed - Try Again')
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
