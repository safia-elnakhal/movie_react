
import axiosInstance from './../../network/config';
import axios from 'axios';
//import LanguageContext from '../../context/language';


export const getMovieList = (contextLang) => (dispatch) => {
    return axiosInstance
        .get(`/movies`,
            {
                params: {
              //    api_key: "84dece8357faebd56fdf2eb1dd9974a4",
                    language: contextLang,

                }
            }
        )

        .then((res) => {

            dispatch({
                type: "GET_MOVIES-LIST",
                payload: res.data.results

            })
                .catch((err) => console.log(err));
        })



};



export const getMoviesDetails = (params,contextLang) => (dispatch) => {


    return axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}`, {

            params: {
                api_key: "84dece8357faebd56fdf2eb1dd9974a4",
                language:contextLang,
        }
        })


        .then((res) => {
            dispatch({
                type: "GET_MOVIE_DETAILS",
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};