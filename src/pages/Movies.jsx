import React, { useEffect, useState } from 'react'
import axiosInstance from '../network/config';
import Loader from '../components/Loader/Loader';
import MovieCards from '../components/MovieCard/MovieCards';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {  
        const getMovies= async () => {
            const response = await axiosInstance.get("/movies")
                    setMovies(response.data.results); 
              };
             getMovies(); 
            //  console.log(movies);
              setIsLoading(false);
            
         
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
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
                    return(
                        <div key={movie.id} className="col-md-2 my-3">
                         <MovieCards movie={movie}/>
                         </div>
                    )}
                    
                    )}
                    
                </div>


            )}
        </>
    )
}
