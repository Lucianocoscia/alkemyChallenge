import React from 'react'
import './Footer.css'
// import { useEffect, useState } from 'react';

const Footer = () => {
  //logica para obtener la url y pasarla como parametro


  return (
            <>
              

                 

                { window.location.pathname === '/' || window.location.pathname === 
                 '/registro' || window.location.pathname === '/login' ? null 
                 : 
                 (
                        <footer >
                          <div className='container-grid'>
                              <div className='grid-footer'>

                                <div>
                                  <div className='links-container'>
                                    <a href="">Home</a>
                                    <a href="">Contact Us</a>
                                    <a href="">Term of Services</a>
                                    <a href="">About Us</a>
                                  </div>
                                </div>

                                <div>              
                                  <div className='links-container'>
                                    <a href="">Live</a>
                                    <a href="">FAQ</a>
                                    <a href="">Premium</a>
                                    <a href="">Privacy policy</a>
                                  </div>
                                </div>

                                <div>
                                  <div className='links-container'>
                                    <a href="">You must watch</a>
                                    <a href="">Recent release</a>
                                    <a href="">Top IMDB</a>
                                  </div>
                                </div>

                              </div>
                          </div>
                        </footer> 
                  ) 
        } 
              
                      
              
              
              
            </>

  )
}

export default Footer