import {Link} from "react-router-dom";
import React from "react";
import HomePage from './HomePage';
import Client_Validation from '../components/Client_Validation';
import './SignUp.css';


export default function SignUp() {
    return (
        <div className="container">
            <div className="form-container">
                <h1 className="title">Sign Up</h1>
                <form id="MyForm" onSubmit={Client_Validation}>
                    <div className="input-container">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="Enter your first name"></input>
                    </div>
                    <div className="input-container">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Enter your last name"></input>
                    </div>
                    <div className="input-container">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username"></input>
                    </div>
                    <div className="input-container">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"></input>
                    </div>
                    <div className="input-container">
                        <label for="password">Password*</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"></input>
                    </div>
                    <button className="submit-btn" type="submit">Sign Up</button>
                    <p className="signin-text">Already have an account? <a href="signin">Sign in</a></p>
                </form>
                         <div id="error-message"></div>
            </div>
          )}

          <p className="signin-text">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
      <Outlet />
    </div>
  );
}














