import { User } from "../Modals/User.js";
import { UserMovie } from "../Modals/UserMovie.js";


export const AddMovies = async (req, res) => {
    try {

console.log("add movie Function")

      const { image, title, ratings,genre,language, clerkId } = await req.body;
  
      console.log(image,title)

      if (!image || !title || !ratings) {
        return res.status(400).json({ message: "Bad Request" });
      }
  
  
      const userExists = await User.find({ clerkId: clerkId });
      if (userExists.length == 0)
        return res.status(401).json({ message: "You're not Authenticated" });
  
      const userId = userExists[0]._id;
  
      const newmovie = await UserMovie.create({
        image,
        title,
        ratings,
        genre,
        language,
        userId,
      });
  
      console.log(newmovie)
      if (!newmovie)
        return res.status(400).json({ message: "Cannot create post" });
  
      return res.status(200).json({ newmovie });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error " });
    }
  };


  export const getmovie = async(req,res)=>{

    try {
        const movies = await UserMovie.find().populate('userId', 'username'); // Retrieve all movies and populate the userId field with the username
      
      console.log(movies)
        res.status(200).json(movies);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }

  }