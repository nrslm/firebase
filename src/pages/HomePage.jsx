import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'
import { removeUser } from '../store/slices/userSlice'

function HomePage() {
  const dispatch = useDispatch()
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
  }, [])
  

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        remove accaunt{email}
      </button>
      <p>dsadasdsad</p>
    </div>
  )

}

export default HomePage