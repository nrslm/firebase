import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

function RegisterPage() {
    return (
        <>
            <div>RegisterPage</div>
            <SignUp/>
            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </>
    )
}

export default RegisterPage