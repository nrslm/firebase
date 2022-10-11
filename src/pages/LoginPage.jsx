import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

function LoginPage() {
    return (
        <>
            <div>LoginPage</div>
            <Login/>
            <p>
                Or <Link to='/register'>Register</Link>
            </p>
        </>
    )
}

export default LoginPage