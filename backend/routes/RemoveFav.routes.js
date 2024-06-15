import express from "express";
import  {removeFromFavorites}  from "../handlers/Favorites.handlers";


const RemoveFav = express.Router();


try{

 RemoveFav.post("/", removeFromFavorites);


}
catch(error){

    console.log(error)
}



export default RemoveFav;