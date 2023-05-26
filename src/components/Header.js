import { Link, Outlet } from "react-router-dom";
// import './Header.css'
export default function Navigation() {
    return (
        <div>
            <header>
                <Link to="/" className="logo">RESTVIEW</Link>
                <nav className="navigation">
                    <Link to="bestratings">Best Ratings</Link>
                    <Link to="signin">Sign in</Link>
                    <Link to="signup">Sign up</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}