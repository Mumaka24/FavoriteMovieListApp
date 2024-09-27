// src/components/Movies.jsx
import React from 'react';

function Movies({ movies }) {
  return (
    <div>
      <h2>Movies List</h2>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li> // Add unique key here
          ))}
        </ul>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
}

export default Movies;
