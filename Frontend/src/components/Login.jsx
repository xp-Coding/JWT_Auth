import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e)=>{
        e.preventDefault()
        const data = {email, password}
        axios.post("http://localhost:8000/api/auth/login", data)
        .then((response)=>{
            console.log(response);
            localStorage.setItem("token", response.data.token)
            navigate("/home")            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>
       <form onSubmit={handleLogin}>
        
        <label>Email:</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login