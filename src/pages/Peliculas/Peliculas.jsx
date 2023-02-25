import React from 'react'
import { useState, useEffect} from 'react';
import Item from '../../components/Item/Item';
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { apiConfig, category,  } from '../../config/config'
const Peliculas = () => {

    const [moviesList, setMoviesList] = useState([]);

    const getMovieList = () =>{
      const endPoint = `${apiConfig.baseURL}discover/${category.movie}?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      
      axios.get(endPoint).then((response) => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
    };

    useEffect(() => {
      getMovieList()
    },[setMoviesList])
  
    console.log(moviesList);

  return (
    <>
         
            <div className="grid-list-results">
                {
                    moviesList.map((oneMovie, index)=>{
                        return(
                            <div key={index} className="">
                            <Item 
                                
                                id= {oneMovie.id}
                                title={oneMovie.title}
                                overview={oneMovie.overview.substring(0, 100)}
                                poster_path={`${apiConfig.w500Image(oneMovie.poster_path)}`}
                            />
                            </div>
                        )
                    })
                }
            </div> 
                          
    </>
  )
}

export default Peliculas