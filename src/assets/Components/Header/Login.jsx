import React, { useState } from 'react'
import './Login.css'

function Login({ isOpen, onClose }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {

            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            console.log("Sign Up Data:", formData);
        } else {

            console.log("Sign In Data:", formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="login-overlay" onClick={onClose}>
            <div className="login-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                
                <div className="login-header">
                    <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
                    <p>{isSignUp 
                        ? 'Enter your details to create an account' 
                        : 'Sign in to continue shopping'}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    )}

                    {!isSignUp && (
                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                    )}

                    <button type="submit" className="submit-btn">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>

                    <div className="switch-form">
                        <p>
                            {isSignUp 
                                ? 'Already have an account? ' 
                                : 'Don\'t have an account? '}
                            <span onClick={() => setIsSignUp(!isSignUp)}>
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login