import express from "express"
import { addtoReviews,getReview } from "../handlers/Reviews.handlers.js"


export const ReviewRoutes = express.Router();

try{

   ReviewRoutes.post("/",addtoReviews);
ReviewRoutes.get("/",getReview);
}
catch(error){

    console.log(error)
}