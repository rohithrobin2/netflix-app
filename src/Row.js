import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import { ThumbUpSharp } from '@material-ui/icons';


function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
async function fetchData(){
    const request =await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
        }
        fetchData();

    },[fetchUrl])

console.log(movies)
function truncate(string,n){
    return string?.length>n ? string.substr(0,n-1) + '...' :string;
    
        } 
    return (
        <div className='row' >
            <h2>{title}</h2>
           
        <div className="row_posters ">
            {movies.map(
                (movie) =>

                (((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path ))&&(
                
                <div className="group" key={movie.id}>
                <img 
                
                className={`row_poster ${ isLargeRow &&"row_posterLarge"}`}
                
                
                src={`${base_url}${
                    isLargeRow ? movie.poster_path: movie.backdrop_path
                }`} alt={movie.name} 
               
                />
                <div className="movie_details " >
                  
                  
                  <h2 style={{minWidth:"100px"}} >  {movie?.title||movie.name||movie?.original_name}</h2>  

                  <h5 style={{}}>Rating:{movie.vote_average} &nbsp;
                   Date: {movie.release_date||movie.first_air_date}</h5>
                  
                  <p>{truncate( movie?.overview,50)}</p>
                  <p>< ThumbUpSharp/> {movie.vote_count}</p>
                  </div>
          </div>
                
                     ) ))
               
                }
             
            
            </div>
         
        </div>
    )
}

export default Row;
