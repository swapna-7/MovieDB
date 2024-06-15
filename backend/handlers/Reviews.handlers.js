import { User } from "../Modals/User.js";
import { Review } from "../Modals/Review.js";

export const addtoReviews = async(req,res) =>{

   try{

    console.log("add to review function")

    const {movieId,clerkId,review,createdAt} = await req.body;

    console.log(clerkId,movieId,review,createdAt)

    const userExists = await User.find({ clerkId: clerkId });
        if (userExists.length == 0)
          return res.status(401).json({ message: "You're not Authenticated" });
    
        const userId = userExists[0]._id;
        const newReview = await Review({
            movieId,
            userId,
            review,
            createdAt
        })
        
        console.log("new Review",newReview)

        await newReview.save();

        return res.status(201).json({ message: "Review Added" });

   }
   catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error  from handlers" });
  }

};

export const getReview =async(req,res) =>{

    try{

        const movieId = req.query.movieId;
        console.log('Getting reviews for movie ${movieId}');
   
   
        const reviews = await Review.find({ movieId }).populate('userId');
        console.log(reviews);
    
        res.status(200).json(reviews);
   
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error " });
}
}