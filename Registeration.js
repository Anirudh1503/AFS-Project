import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
import Navbar from "./Navbar";

export default function Registeration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormData = async (event) => {
    try {
      event.preventDefault();
      
      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }
      
      const response = await axios.post("http://localhost:3000/register", {
        username: username,
        password: password,
      })
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <div>
      <Navbar/>
      <div className="register-container">
        <h1>Registration :</h1>
        <form onSubmit={handleFormData}>
          <label>Username : </label>
          <input type="text" value={username} onChange={handleUsername}></input>
          <br></br>
          <label>Password : </label>
          <input type="password" value={password} onChange={handlePassword}></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
