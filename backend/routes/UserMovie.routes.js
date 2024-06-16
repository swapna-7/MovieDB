import express from "express";

import { AddMovies,getmovie } from "../handlers/User-Movie.handlers.js";

const AddMovieRouter = express.Router();

try{


    AddMovieRouter.post("/", AddMovies);
    AddMovieRouter.get("/", getmovie);

}
catch(error){

    console.log(error)
}



export default AddMovieRouter;