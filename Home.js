import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Homepage = () => { 
    const navigate = useNavigate(); 

    const handleSignUp = () => {
        navigate('/register');
    };

    const handleSignIn = () => {
        navigate('/login');
    };
    
    return (
            <div className='default'>
                <div className="name">Welcome to Spiritus</div>
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={handleSignIn}>Sign In</button>
            </div>

    );
};

export default Homepage;
