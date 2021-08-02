import React from 'react'

const base_url="https://image.tmdb.org/t/p/original/";

function videoCard(movie) {
    
    return (
        <div>
          <img
          
            className=""
                
                key={movie.id}
                src={`${base_url}${
                   movie.poster_path|| movie.backdrop_path
                }`} alt={movie.name} 
          />
        </div>
    )
}
(((isLargeRow && movie.poster_path) ||
(!isLargeRow && movie.backdrop_path ))&&(
export default videoCard
