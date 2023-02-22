import React, {  useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeroSlide.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import axios from "axios";
import swAlert from "@sweetalert/with-react";


export default function HeroSlide({}) {




    const [upcomingMovie, setUpcomingMovies] = useState([]);

    useEffect(() => {
      const endpointUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=de087c1ac41855cc9ba52d6c878ac34b&language=en-US'

      
      axios.get(endpointUpcoming).then((response) => {
        const apiData = response.data;
        setUpcomingMovies(apiData.results);
        console.log(apiData.results);
      }).catch((error) => {
        // console.log(error);
        swAlert("Oops", "Hubo un problema con la conexion al servidor, intenta mas tarde", "error");
      })
  
    },[setUpcomingMovies]);
    const originalImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
/*         pagination={{
          clickable: true,
        }} */
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
           {
            

                                    upcomingMovie.map((oneMovie, index)=>{
                                            const background = originalImage( oneMovie.backdrop_path ? oneMovie.backdrop_path : oneMovie.poster_path)


                                        return(

                                            <SwiperSlide key={index}>  
                                                <div style={{ backgroundImage: `url(${background})` }}  className="hero-container">

                                                    <div className="hero-grid">
                                                        <div className="hero-grid-1">
                                                            <h1 className="hero-title">{oneMovie.title}</h1>
                                                            <h5 className="hero-overview">{oneMovie.overview.substring(0, 200)}...</h5>

                                                            <div className="hero-btns-container">
                                                                    <button className="btn1">Watch Now</button>
                                                                    <button className="btn1 btn-outline">Watch Trailer</button>
                                                            </div>
                                                        </div>
                                                        <div className="">
                                                            <img className="hero-img" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="" />
                                                        </div>
                                                    </div>
                                   
                                                </div>
                                            </SwiperSlide>
                                        
                                     
                                        
                                        )
                            
                                    })
                                }
      </Swiper>
    </>
  );
}