import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";

export default function Review({ movieId }) {
  const [reviews, setReviews] = useState([]); // State for storing reviews
  const [newReview, setNewReview] = useState(''); // State for new review input
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submitting review
  const { user } = useUser(); // Get the current user from Clerk
  const [savedReview, setSavedReview] = useState(null); // State for saved review


  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/reviews`,
        {
           params:{
            movieId:movieId
           } 
        }
      );
      setReviews(data);
console.log(data)

    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (!user) {
        alert('Please log in to add a review');
        return;
      }

      const currentDate = new Date();



    setIsSubmitting(true);

    try {
      const { data } = await axios.post(`http://localhost:5000/reviews`, {
        movieId: movieId,
        clerkId: user.id,
        review: newReview,
        createdAt: currentDate.toISOString(),
      });

      setReviews([...reviews, data]);
      setNewReview('');
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error adding review:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
   

      <form onSubmit={handleAddReview} className="flex">
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add a review..."
          className="bg-transparent border-2 border-purple-600 rounded-md px-10 py-2 mr-4 text-white"
        />
        <button type="submit" disabled={isSubmitting} className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
          {isSubmitting? 'Submitting...' : 'Add Review'}
        </button>
      </form>


      <ul>
        {reviews.map((review) => (
          <li key={review._id} className="mb-2">
            <p className="text-lg">{review.review}</p>
            <p className="text-sm">{review.user && review.user.firstName ? review.user.firstName : 'Unknown User'}</p>
            <p className="text-xs"> {new Date(review.createdAt).toLocaleString()}</p>

          </li>
        ))}
          
      </ul>
    </div>
  );
}