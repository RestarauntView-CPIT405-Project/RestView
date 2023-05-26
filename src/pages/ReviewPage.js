// TODO: Add code for review page
import React, { Fragment } from "react";
import Header from '../components/Header';
import script from "https://kit.fontawesome.com/c8e4d183c2.js";
import "./ReviewPage.css"
export default function ReviewPage() {
    return (
        <div>
            <div class="Rest-img">

                <img src="images/Abu zaid.jpg" height="150" width="250" />
            </div>
            <div class="testimonial-heading">
                <h1>Comments and Ratings</h1>
            </div>
            <div class="testimonial-box-container">

                <div class="testimonial-box">

                    <div class="box-top">

                        <div class="profile">

                            <div class="profile-img">
                                <img src="../images/c-2.png" />
                            </div>
                            {/* <!--name-and-username--> */}
                            <div class="name-user">
                                <strong>Ahmad Ali</strong>
                                <span>@AhmadAli1999</span>
                            </div>
                        </div>
                        {/* <!--reviews------> */}
                        <div class="reviews">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            {/* <!--Empty star--> */}
                        </div>
                    </div>
                    {/* <!--Comment----------------------------------------> */}
                    <div class="client-comment">
                        <p>Bad service and the food isn't the best</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-box">

                <div class="box-top">
                    {/* <!--profile-----> */}
                    <div class="profile">
                        {/* <!--img----> */}
                        <div class="profile-img">
                            <img src="images/c-2.png" />
                        </div>

                        <div class="name-user">
                            <strong>Mohammed Adel</strong>
                            <span>@MDL99</span>
                        </div>
                    </div>

                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        {/* <!--Empty star--> */}
                    </div>
                </div>

                <div class="client-comment">
                    <p> good taste but the service isn't that good, i waited so long to get my order.. other than this
                        everything is great. </p>
                </div>
            </div>
            <div class="testimonial-box">

                <div class="box-top">

                    <div class="profile">

                        <div class="profile-img">
                            <img src="images/c-2.png" />
                        </div>

                        <div class="name-user">
                            <strong>Yousef</strong>
                            <span>@Ysf2000</span>
                        </div>
                    </div>

                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        {/* <!--Empty star--> */}
                    </div>
                </div>

                <div class="client-comment">
                    <p> Great place and tasty food but the service is a little bit slow.</p>
                </div>
            </div>

            <div class="testimonial-box">

                <div class="box-top">

                    <div class="profile">

                        <div class="profile-img">
                            <img src="images/c-2.png" />
                        </div>

                        <div class="name-user">
                            <strong>Abdulrahman</strong>
                            <span>@Dhom11</span>
                        </div>
                    </div>

                    <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>

                <div class="client-comment">
                    <p>I recommend visiting this resturant, but the service can be faster.</p>
                </div>
            </div>
        </div>
    )
}