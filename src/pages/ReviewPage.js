//TODO: Do rev page
//TODO: Git resturant name/pic and save comments
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReviewPage.css';
import Restaurants from "../components/Restaurants.json";
export default function Comments() {
  const location = useLocation();
  const restaurantId = location.state.id;
  console.log(restaurantId, " useLocation Hook")
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [commentText, setCommentText] = useState('');

  Restaurants.map((Restaurant) => {
    if (restaurantId == Restaurant.id) {
      console.log(Restaurant.Name)
      return (
        <div>
          <div class="Resturants_card" key={Restaurant.id}>
            <div class="Resturant-image">
              <img src={Restaurant.Image} height="220px" width="270px"></img>

            </div>
            <div class="Resturant_info_info">
              <h3>{Restaurant.Name}</h3>
              <p>{Restaurant.Description}</p>
              <div class="restaurantRate" data-restaurant="A">

                <div class="rating">
                  <span class="Rating">{Restaurant.Rating}<span class="star" data-value="1">&#9733;</span></span>
                  {/* <span class="star" data-value="1">&#9733;</span>
                                            <span class="star" data-value="2">&#9733;</span>
                                            <span class="star" data-value="3">&#9733;</span>
                                            <span class="star" data-value="4">&#9733;</span>
                                            <span class="star" data-value="5">&#9733;</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
  )



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      alert('Please sign up to submit a comment.');
      return;
    }

    // Create a new comment object
    const newComment = {
      rating,
      commentText,
      username: username,
      date: new Date().toLocaleDateString()
    };

    // Add the new comment to the comments array
    setComments([...comments, newComment]);

    // Reset the rating and comment text
    setRating(0);
    setCommentText('');
  };

  return (
    <div className="comments-container">
      <h1>Restaurant Comments</h1>
      <div className="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to leave a comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-info">
                <span className="username">{comment.username}</span>
                <span className="date">{comment.date}</span>
                <div className="rating">
                  {Array.from({ length: comment.rating }).map((_, index) => (
                    <span key={index} className="star" role="img" aria-label="star">
                      ⭐️
                    </span>
                  ))}
                </div>
              </div>
              <p className="comment-text">{comment.commentText}</p>
            </div>
          ))
        )}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h2>Leave a Comment</h2>
        <div className="rating-input">
          <label htmlFor="rating">Rating:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                role="button"
                onClick={() => setRating(star)}
              >
                ⭐️
              </span>
            ))}
          </div>
        </div>
        <div className="comment-input">
          <label htmlFor="commentText">Comment:</label>
          <textarea
            id="commentText"
            name="commentText"
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
}
