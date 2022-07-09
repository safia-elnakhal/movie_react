import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addCurrentFavourite, removeCurrentFavourite } from "../../store/actions/favorite"


export default function MovieCards({ movie, isFavoriteClicked }) {
  const favourite = useSelector((state) => state.favorites.favorites);
  console.log(favourite);
  // const isFavourite = favourite.some((favorites) => favorites.id === id);

  // const isFavourite = <AiOutlineStar />;
  const dispatch = useDispatch();

  //   const togglefavorites=(movie)=>{
  //     if(favourite.includes(movie)){
  //         dispatch(addCurrentFavourite(movie));
  //     }
  //     else {
  //         dispatch(removeCurrentFavourite(movie));
  //     }
  //   }
  const [isClicked, setIsClicked] = useState(isFavoriteClicked);

  const addFavourite = (movie) => {
    if (favourite.findIndex((elment) => {
      return elment.id == movie.id
    }) < 0) {
      dispatch(
        addCurrentFavourite(movie)
      );
      //console.log(movie);
      setIsClicked(true);
    }
  };

  const removeFavourite = (movie) => {
    dispatch(
      removeCurrentFavourite(movie)
    );
    setIsClicked(false);

  };

  // function changeIcon() {
  //   isFavourite ? removeFavourite() : addFavourite();
  // }



  return (
    <>

      <div className="item">
        <div className="bg-transparent star" onClick={() => {
          if (isClicked === true) {
            removeFavourite(movie);
            // changeIcon();
          } else {
            addFavourite(movie);
            // changeIcon();

          }
        }}>{isClicked ? (<AiFillStar className="bg-transparent star" />)
          : (<AiOutlineStar className="bg-transparent star" />)}</div>


        {/*   
    <div className="card h-100">
      <button
        onClick={() => {
          if (isFavourite === true) {
            changeIcon();
          } else {
            changeIcon();
          }
        }}
      >
        {isFavourite ? (
          <AiOutlineStar
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              color: "red",
            }}
          />
        ) : (
          <AiFillStar
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              color: "white",
            }}
          />
        )}
      </button>
 */}



        <NavLink to={`/movie-details/${movie.id}`} className=" page ">

          <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
          <h5 className=''>{movie.title}</h5>
          <span className='vote'>{movie.vote_average}</span>

        </NavLink>
      </div>



    </>
  )
}
