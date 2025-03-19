import React, { useState } from 'react';
import './Login.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = 'Valid email is required';
    }

    if (!formData.password || formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', formData);
        if (response.data.success) {
          const token = response.data.authToken;
          localStorage.setItem("authToken", token);
          alert("Login successful!");
          navigate('/'); 
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <img
        className="mobile-image"
        src="https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Address"
      />

      <div id='log' className="login-container">
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <button style={{backgroundColor:'#880085',color:'white'}} className='btn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
