import React from "react";
import './SignIn.css';
import HomePage from './HomePage';
import Client_Validation from '../components/Client_Validation';

export default function SignIn() {
    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <h1 className="title">Sign In</h1>
                    <form id="MyForm" action="" onsubmit="Client_Validation(event)" method="post">
                        <div className="input-container">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username"></input>
                        </div>
                        <div className="input-container">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                        </div>
                        <button className="submit-btn" type="submit">Sign In</button>
                        <p className="signin-text">Don't have an account? <a href="signup">Sign up</a></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}