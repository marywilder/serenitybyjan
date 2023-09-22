import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <>
        <h5>Welcome {auth.user}</h5>
        <button onClick={handleLogout}>Logout</button>
    </>
  )
}
