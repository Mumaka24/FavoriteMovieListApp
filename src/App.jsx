import { useState,useEffect } from 'react'
//import our components
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'
import FavoriteList from './components/FavoriteList'
import Movies from './components/Movies'

function App() {
  // Create State to store movie data
    const[movies , setMovies ] =useState([]);
   // const[movie, setMovie]=useState[[1]]

   //Create another state for favorite movies
   const [favorites, setFavorites] = useState([]);

// function to get movies
const API_KEY = "b06b46b0"
    const getMovie = async(searchTerm) => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
      );
            //1. Fetch the Data(Parse JSON response into a JavaScript object)
      const data = await response.json();
      // set Response to state
            //2. Convert the data to json

             //3. Save the retrieve data to state (Set the Movie state to the received data)
      setMovies([data]);      
    };

// Function to request movies and save them to state
//useEffect(()=>{
  //getMovie("Superbad")
//},[]);

// Function to add movies to Favorites
const addToFavorites = (movie) =>
{
  setFavorites([...FavoriteList, movie])
};

  return (
    <div>
      <h1>Welcome To Home of Movies</h1>
      {Movies && Movies.length> 0 ? (
      <ul>
        {movies.map((movie) => (
            <li key={movie.imdbID}>
              {movie.Title}
            <button onClick={() => addToFavorites(movies)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
      ) : (
        <p>No movies available</p>
      )}

      <h2>select your favorite movie in the search bar</h2>

      <ul>
        {favorites.map(fav => (
          <li key={fav.id}>{fav.title}</li>
        ))}
      </ul>

      <Form movieSearch={getMovie}/>

       <MovieDisplay movie={movies} /> 
    
    </div>
  )}
  

export default App


