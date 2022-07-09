//import React, { useEffect, useState } from 'react'
 import React, { useEffect } from 'react'
//import axiosInstance from '../network/config';
//import Loader from '../components/Loader/Loader';
import MovieCards from '../components/MovieCard/MovieCards';
import { useSelector,useDispatch} from "react-redux";
import {getMovieList} from "../store/actions/movies"
import { useContext } from "react";
import LanguageContext from '../context/language';


export default function Movies() {
    const {contextLang}=useContext(LanguageContext);

    const favourite = useSelector((state) => state.favorites.favorites);
    //const [movies, setMovies] = useState([]);
    //const [isLoading, setIsLoading] = useState(true);
  const movies=useSelector(state => state.movies.movieList)
  console.log(movies);
   const dispatch =useDispatch();


    useEffect(() => { 
        dispatch(getMovieList(contextLang)) 
        // const getMovies= async () => {
        //     const response = await axiosInstance.get("/movies")
        //             setMovies(response.data.results); 
        //       };
        //      getMovies(); 
        //     //  console.log(movies);
        //       setIsLoading(false);
            
         
    }, []);

    return (
        <>
            {/* {isLoading ? (
                <Loader />
            ) : ( */}
                <div className="row ">
                    <div className="col-md-4">
                        <div className="item">
                            <div className="brdr w-25"></div>
                            <h1>Trending <br />movies<br /> to watch now</h1>
                            <p className='secondFontColor'>Most watched movies y day</p>
                            <div className="brdr w-100"></div>
                        </div>
                    </div>
                    {movies.map((movie) =>{

                         const isFavorite=favourite.some((fav)=>movie.id ===fav.id)
                    return(
                        <div key={movie.id} className="col-md-2 my-3">
                         <MovieCards movie={movie} isFavoriteClicked={isFavorite}/>
                         </div>
                    )}
                    
                    )}
                    
                </div>


            {/* )}  */}
        </>
    )
}
