import React, { useState } from 'react';
import './AuthModal.css'; // Assuming you have styles for the modal

const AuthModal = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <div className="auth-modal">
            <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
            </form>
            <button className="switch-button" onClick={switchModeHandler}>
                Switch to {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
        </div>
    );
};

export default AuthModal;