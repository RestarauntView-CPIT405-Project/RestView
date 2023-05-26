import React from "react";
import Header from '../components/Header';
import './NotFound.css';
// TODO: design not found page properly
export default function NotFound() {
    return (
        <div>
            <Header />
            <section className="main">
                <div>
                    <h2>Welcome to<span>Restaurants Views</span></h2>
                    <h3>A website Where You can rate and see resturants ratings</h3>
                    <a href="#Resturants" className="main_btn">See Restaurants</a>
                </div>
            </section>
        </div>
    );
}