//TODO: do Headder code
//TODO: make the sign in and sign up disappear after the user singed
//TODO: make user sing out

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import './Header.css';

export default function Navigation() {
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleSignUp = (newUsername) => {
      setUsername(newUsername);
    };
  
    const handleSignOut = () => {
        setUsername('');
        // Clearing the stored username from local storage when singed out
        localStorage.removeItem('username');
      };
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div>
        <header>
          <Link to="/" className="logo">
            RESTVIEW
          </Link>
          <nav className="navigation">
            <Link to="bestratings">Best Ratings</Link>
            {username !== "" ? (
              <div className="user-menu" onClick={handleMenuToggle}>
                <span>Welcome:  {username}</span>
                {isMenuOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <button onClick={handleSignOut}>Sign out</button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <>
                <Link to="signin">Sign in</Link>
                <Link to="signup">Sign up</Link>
              </>
            )}
          </nav>
        </header>
        <Outlet handleSignUp={handleSignUp} handleSignOut={handleSignOut} />
      </div>
    );
  }
