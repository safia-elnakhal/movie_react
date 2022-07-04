import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import {useSelector,useDispatch}from "react-redux";
import {addCurrentFavourite,removeCurrentFavourite} from "../../store/actions/favorite"


export default function MovieCards({ movie: { id, poster_path, title, name, vote_average } }) {
    const favourite = useSelector((state) => state.favorites);
   // console.log(favourite);
  
     const isFavourite=<AiOutlineStar/>;
     const dispatch = useDispatch();

        //   const togglefavorites=(movie)=>{
        //     if(favourite.includes(movie)){
        //         dispatch(addCurrentFavourite(movie));
        //     }
        //     else {
        //         dispatch(removeCurrentFavourite(movie));
        //     }
        //   }
         const [isClicked, setIsClicked] = useState(false);
        
      
        const addFavourite = (movie) => {
          dispatch(
            addCurrentFavourite(movie)
          );

         setIsClicked(true);
      
        };
      
        const removeFavourite = (movie) => {
          dispatch(
            removeCurrentFavourite(movie)
          );
           setIsClicked(false);
 
        };


    
        
       
    return (
        <>

<div className="item">
        <div className="bg-transparent star"  onClick={() => {
          if (isClicked === true) {
            removeFavourite();
            // changeIcon();
          } else {
            addFavourite();
            // changeIcon();
     
          }
        }}>{isFavourite ? ( <AiOutlineStar className="bg-transparent star"/>) :(<AiFillStar className="bg-transparent star" />) }</div>
    
     



       
          
            <NavLink to={`/movie-details/${id}`} className=" page ">

                <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                <h5 className=''>{title}{name}</h5>
                <span className='vote'>{vote_average}</span>

            </NavLink>
        </div>
           


        </>
    )
}
