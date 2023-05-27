import React from "react";
import Header from '../components/Header';
import './NotFound.css';
export default function NotFound() {
    return (
        <div>
            <Header />
            <section className="main">
                <div>
                    <h2>Oops, 404 page not found!</h2>
                    <h3></h3>
                    <a href="/" className="main_btn">Click to go back!</a>
                </div>
            </section>
        </div>
    );
}