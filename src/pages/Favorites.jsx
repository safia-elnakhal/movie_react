import React from "react";
import MovieCards from "../components/MovieCard/MovieCards";
import { useSelector } from "react-redux";

export default function Favorites() {
  const favourite = useSelector((state) => state.favorites.favorites);
  console.log(favourite);
  return (
   <>
    <div>
      <h1 className="text-center m-3">MY FAVORITE MOVIES</h1>
      {favourite.length>0?(   
      <div className="row row-cols-3 row-cols-md-4 g-4">
        {favourite?.map((movie) =>(
            <div className="col" key={movie.id} >
              <MovieCards movie={movie} isFavoriteClicked={true}   />
            </div>
            
          ))}</div>
            ):(
                  <div>
                     <h1 className="text-center text-info"> THERE IS NO FAVOURITE MOVIES NOW</h1>
                  </div>

            ) }  
      
       
     
  
    </div>

   
   </>
  )
}
