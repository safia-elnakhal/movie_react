import React, { useState,useEffect } from 'react';
// import axiosInstance from "../network/config";
import axios from "axios";
import {useParams} from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import {getMoviesDetails} from "../store/actions/movies";
import { useContext } from "react";
import LanguageContext from '../context/language'; 



export default function MoviesDetails() {
    //const [movieDetails, setMovieDetails]=useState({});

    const params = useParams();
   console.log(params);
   const {contextLang}=useContext(LanguageContext);
   
   const movieDetails=useSelector((state)=> state.movies.movieDetails)
   console.log(movieDetails);

   const dispatch=useDispatch();

   
    useEffect(() => {
      dispatch(getMoviesDetails(params,contextLang))
        // const getDetailsMovies= async () => {
        //     const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=84dece8357faebd56fdf2eb1dd9974a4`)
        //     // console.log(response.data.belongs_to_collection);
        //     // setMovieDetails(response.data.belongs_to_collection) 
        //     setMovieDetails(response.data);
        //     console.log(response.data);
        // };
        // getDetailsMovies(); 
        //   console.log(movieDetails);
    }, []);


    // useEffect( () => {
    //     axiosInstance
    //       .get(`/${params.id}`)
    //       .then((res) => setMovieDetails(res.data))
    //       .catch((err) => console.log(err));
    //   }, [params.id]);

  return (
 <>
    <div>
      <h2>Movie details</h2>
      <div className="border border-info  page  rounded-5 border-4 m-auto card mb-3" style={{maxWidth:"540px"}}>
  <div className="row  page 5 g-0">
    <div className=" col-md-4 my-auto ">
    <img className='w-100 rounded-5' src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="" />
    </div>
    <div className=" col-md-8">
      <div className="card-body">
        <h5 className=" my-4 text-warning card-title">MOVIE NAME IS:{movieDetails.title}</h5>
        <p className="my-4 card-text">MOVIE TITLE IS:  {movieDetails.original_title}</p>
        <p className="my-5 card-text"><small className="text-info">MOVIE RATING IS:  {movieDetails.vote_average}</small></p>
      </div>
    </div>
  </div>
</div>
  
    </div>
   
 
 
 
 
 </>
  )
}
