import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";
import { Avatar } from '@mui/material';

export default function Review({ movieId }) {
  const [reviews, setReviews] = useState([]); // State for storing reviews
  const [newReview, setNewReview] = useState(''); // State for new review input
  const [newRating, setNewRating] = useState(0); // State for new rating input
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submitting review
  const { user } = useUser(); // Get the current user from Clerk

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/reviews`, {
        params: {
          movieId: movieId
        }
      });
      setReviews(data);
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
        rating: newRating, // Include rating in the POST request
        createdAt: currentDate.toISOString(),
      });

      setReviews([...reviews, data]);
      setNewReview('');
      setNewRating(0); // Reset rating input
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error adding review:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white">
    <h2 className="text-red-400 flex text-4xl font-semibold m-4 justify-center">Reviews</h2>

    <div className='flex flex-row justify-center'>
      <form onSubmit={handleAddReview} className="flex">
        <input
          type="text"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add a review..."
          className="bg-transparent border-2 border-purple-600 rounded-md px-10 py-2 m-4 text-white"
        />
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(parseInt(e.target.value))}
          placeholder="Rating (1-5)"
          className="bg-transparent border-2 border-purple-600 rounded-md px-4 py-2 m-4 w-20 text-white"
          min="1"
          max="5"
        />
        <button type="submit" disabled={isSubmitting} className="bg-purple-600 m-5 text-white h-10 px-4 rounded-md hover:bg-purple-700">
          {isSubmitting ? 'Submitting...' : 'Add Review'}
        </button>
      </form>
    </div>

      <div className='grid gap-4 grid-cols-3 grid-rows-3 m-1'>
    <ul>
      {reviews.map((review) => (
        <li key={review._id} className="m-2 p-2 border-4 ">
         <div className='flex flex-row space-x-4 bg-slate-500 m-1 p-1 rounded-lg'> 
<Avatar src={review.userId.photo} alt={review.userId.firstName + " " + review.userId.lastName}>
{review.userId.firstName ? review.userId.firstName[0] : '?'}
</Avatar>
<p className="text-xl m-2">{review.userId && review.userId.firstName ? review.userId.firstName : 'Unknown User'}</p>
          </div>
          <h1 className='font-semibold text-xl'>Comments:</h1>
          <p className="text-lg "> {review.review}</p>
          <h1>-------------------------------------------------------------------------------</h1>
          <h1 className='font-semibold text-xl '>Rating:</h1>

          <p className="text-lg "> {review.rating} <i className="ml-2 fas fa-star" /></p>
          <h1>-------------------------------------------------------------------------------</h1>

          <p className="text-xs"> {new Date(review.createdAt).toLocaleString()}</p>
        </li>
      ))}
    </ul>
    </div>
  </div>
  );
}