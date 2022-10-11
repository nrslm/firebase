import React from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(alert("Nan"))
    }
    return (
        <div>
            <Form
                title={"sign in"}
                handleClick={handleLogin}
            />
        </div>
    )
}

export default Login