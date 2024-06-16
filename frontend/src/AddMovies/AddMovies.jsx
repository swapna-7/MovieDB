import axios from 'axios';
import { Button } from '@/components/shad/ui/button.jsx';
import { UploadCloud } from 'lucide-react';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

const UploadWidget = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [ratings, setRatings] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const { user } = useUser();
  const [successMessage, setSuccessMessage] = useState(''); // Add this state


  async function handleChange(e) {
    setUploading(true);
    try {

      if (!user) {
        alert('Please log in to add a review');
        return;
      }
  
      const file = e.target.files[0];
      const data = new FormData();
      data.append("file", file);

      const response = await (await axios.post(`http://localhost:5000/api/upload`, data)).data;
      setImage(response.url);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(image)
    try {
      const movieData = {
        title: movieTitle,
        ratings,
        genre,
        language,
        image,
        clerkId: user.id,

      };
      const response = await axios.post(`http://localhost:5000/addmovies`, movieData);
      console.log(response);
      setSuccessMessage('Movie added successfully!'); // Set success message
      setMovieTitle(''); 
      setRatings(''); 
      setGenre(''); 
      setLanguage(''); 
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen">
      {uploading? (
        <p>Uploading...</p>
      ) : (
        <div className="flex flex-row w-full h-full">
          <div className="w-1/2 h-full flex justify-center items-center">
            {image? (
              <img src={image} alt="Uploaded Image" className="w-full h-full object-cover" />
            ) : (
              <>
                <UploadCloud className="w-16 h-16 text-neutral-600" />
                <p className="font-semibold text-sm">
                  Drag photos and video here
                </p>
                <Button className="cursor-pointer" size="sm" variant="ghost" asChild>
                  <div className='cursor-pointer'>
                    <label className='cursor-pointer text-xl' htmlFor='upload'>Select from computer</label>
                    <input type='file' id='upload' onChange={(e) => handleChange(e)} accept=".jpg,.jpeg,.png" hidden />
                  </div>
                </Button>
              </>
            )}
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
              <label>
                Movie Title:
                <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
              </label>
              <br />
              <label>
                Ratings:
                <input type="text" value={ratings} onChange={(e) => setRatings(e.target.value)} />
              </label>
              <br />
              <label>
                Genre:
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
              </label>
              <br />
              <label>
                Language:
                <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
              </label>
              <br />
              <Button type="submit" className="cursor-pointer" size="sm" >
                Submit
              </Button>
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadWidget;