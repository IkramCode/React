import React, { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Login() {
    
    const {setUser} = useContext(UserContext)
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }
    return (
        <>
            <h2>LogIn</h2>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
