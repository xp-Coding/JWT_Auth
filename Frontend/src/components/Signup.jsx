import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    const userInfo = { name, email, password };
    axios.post("http://localhost:8000/api/auth/signup", userInfo)
      .then((response) => {
        console.log(name, email, password);
        console.log(response);
        navigate("/login")
        
      })
      .catch((err) => {
        console.log(err, err.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
