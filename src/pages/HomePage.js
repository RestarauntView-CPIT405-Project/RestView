import React from "react";
// import './HomePage.css';
import Restaurants from "../components/Restaurants.json";
// import AbuZaidImg from "../images/Abu zaid.jpg"
// import AbuZaidImg from "../images/Abu zaid.jpg"

// TODO: fix image imports
export default function HomePage() {
    return (
        <div>
            <section className="main"> {/* cover page */}
                <div>
                    <h2>Welcome to Restaurants Views</h2>
                    <h3>A website where you can rate and see resturants ratings</h3>
                    <a href="#Resturants" className="main_btn">See Restaurants</a>
                </div>
            </section>
            <div>
                <section class="Resturant"> {/* restaurant list */}
                    <h2 class="title">Restaurants</h2>
                    {Restaurants.map((Restaurant) => (
                        <div class="content">

                            <div class="Resturants_card" key={Restaurant.id}>
                                <div class="Resturant-image">
                                    <img src={Restaurant.Image} height="220px" width="270px"></img>

                                </div>
                                <div class="Resturant_info_info">
                                    <h3>{Restaurant.Name}</h3>
                                    <p>Indian bistro</p>
                                    <div class="restaurantRate" data-restaurant="A">

                                        <div class="rating">
                                            <span>{Restaurant.Rating}</span>
                                            {/* <span class="star" data-value="1">&#9733;</span>
                                            <span class="star" data-value="2">&#9733;</span>
                                            <span class="star" data-value="3">&#9733;</span>
                                            <span class="star" data-value="4">&#9733;</span>
                                            <span class="star" data-value="5">&#9733;</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }
            



            {/* <div class="Resturants_card">
                <div class="Resturant-image">
                    <img src={ImHungryImg} height="220px" width="270px"></img>

                </div>
                <div class="Resturant_info_info">
                    <h3>I'm Hungry</h3>
                    <p>Fast Food - Beverages - Burgers</p>
                    <div class="restaurantRate" data-restaurant="B">
                        <div class="rating">
                            <span class="star" data-value="1">&#9733;</span>
                            <span class="star" data-value="2">&#9733;</span>
                            <span class="star" data-value="3">&#9733;</span>
                            <span class="star" data-value="4">&#9733;</span>
                            <span class="star" data-value="5">&#9733;</span>
                        </div>
                    </div>
                </div>
            </div>



            <div class="Resturants_card">
                <div class="Resturant-image">
                    <img src="/images/Albaikk.png" height="220px" width="270px"></img>

                </div>
                <div class="Resturant_info_info">
                    <h3>Albaik</h3>
                    <p>Fast Food - Burgers</p>
                    <div class="restaurantRate" data-restaurant="B">
                        <div class="rating">
                            <span class="star" data-value="1">&#9733;</span>
                            <span class="star" data-value="2">&#9733;</span>
                            <span class="star" data-value="3">&#9733;</span>
                            <span class="star" data-value="4">&#9733;</span>
                            <span class="star" data-value="5">&#9733;</span>
                        </div>
                    </div>
                </div>
            </div>



            <div class="Resturants_card">
                <div class="Resturant-image">
                    <a href="Reviews/revs.html">
                        <span class="link-spanner"></span>
                    </a>
                    <img src="images/Abu zaid.jpg" height="220px" width="270px"></img>
                    <div class="container">

                    </div>

                </div>
                <div class="Resturant_info_info">
                    <h3>Abu Zaid</h3>
                    <p>Arabic - Breakfast</p>
                    <div class="restaurantRate" data-restaurant="C">
                        <div class="rating">
                            <span class="star" data-value="1">&#9733;</span>
                            <span class="star" data-value="2">&#9733;</span>
                            <span class="star" data-value="3">&#9733;</span>
                            <span class="star" data-value="4">&#9733;</span>
                            <span class="star" data-value="5">&#9733;</span>
                        </div>
                    </div>
                </div>
            </div>



            <div class="Resturants_card">
                <div class="Resturant-image">
                    <img src="images/shawarmer.png" height="220px" width="270px"></img>
                </div>
                <div class="Resturant_info_info">
                    <h3>Shawarmer</h3>
                    <p>Fast Food - Arabic - Shawarma & Doner - Sandwiches</p>
                    <div class="restaurantRate" data-restaurant="D">
                        <div class="rating">
                            <span class="star" data-value="1">&#9733;</span>
                            <span class="star" data-value="2">&#9733;</span>
                            <span class="star" data-value="3">&#9733;</span>
                            <span class="star" data-value="4">&#9733;</span>
                            <span class="star" data-value="5">&#9733;</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
            </div >
        <div>



            <section class="product" id="menu">
                <h2 class="title">Best Ratings</h2>
                <button class="pre-btn"><img src="images/arrow.png" alt=""></img></button>
                <button class="nxt-btn"><img src="images/arrow.png" alt=""></img></button>
                <div class="product-container">
                    <div class="product-card">
                        <div class="product-image">
                            <span class="Rating">4.7 <span class="star" data-value="1">&#9733;</span></span>
                            <img src="images/Abu zaid.jpg" class="product-thumb" alt=""></img>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Abu Zaid</h2>
                            <p class="product-short-description">Price range:</p>
                            <p class="product-short-description">$$</p>
                            <p class="product-short-description">Cuisines: </p>
                            <p class="product-short-description">Arabic - Breakfast</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <span class="Rating">4.9 <span class="star" data-value="1">&#9733;</span></span>
                            <img src="images/Albaikk.png" class="product-thumb" alt=""></img>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Albaik</h2>
                            <p class="product-short-description">Price range:</p>
                            <p class="product-short-description"> $$ </p>
                            <p class="product-short-description">Cuisines: </p>
                            <p class="product-short-description">Fast Food</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <span class="Rating">4.8 <span class="star" data-value="1">&#9733;</span></span>
                            <img src="images/seeneez.png" class="product-thumb" alt=""></img>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Seeneez Restaurant</h2>
                            <p class="product-short-description">Price range:</p>
                            <p class="product-short-description"> $$$$</p>
                            <p class="product-short-description">Cuisines: </p>
                            <p class="product-short-description">American, Pizza, Seafood, Barbecue, Italian</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <span class="Rating">4.8 <span class="star" data-value="1">&#9733;</span></span>
                            <img src="images/turkuoise.jpg" class="product-thumb" alt=""></img>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">turkuoise</h2>
                            <p class="product-short-description">Price range:</p>
                            <p class="product-short-description"> $$-$$$</p>
                            <p class="product-short-description">Cuisines: </p>
                            <p class="product-short-description">Turkish, Middle Eastern, Mediterranean, European</p>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image">
                            <span class="Rating">4.7 <span class="star" data-value="1">&#9733;</span></span>
                            <img src="images/BlueOs.png" class="product-thumb" alt=""></img>
                        </div>
                        <div class="product-info">
                            <h2 class="product-brand">Blue Ocean</h2>
                            <p class="product-short-description">Price range:</p>
                            <p class="product-short-description"> $$-$$$</p>
                            <p class="product-short-description">Cuisines: </p>
                            <p class="product-short-description">Seafood, International, Mediterranean, Fusion
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div >
    );
}
