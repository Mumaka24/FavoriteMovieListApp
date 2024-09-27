import React from 'react';

export default function MovieDisplay({movie}) {
  //Function to refund loaded JSX
  const loaded = () => {
    return (
    <>    
          
    <div style={{display:'flex'}}className="flexer">
    <div className="poster">
        <img src={movie.Poster} alt=""/>
        </div>

    <div className="info">
    Genre: {movie.Genre}<hr/>
    Year: {movie.Year}<hr/>    
    Awards: {movie.Awards}<hr/>
    Description: {movie.Description}<hr/>
    {movie.Plot}<hr/>
    
    </div>
    </div>
   </> 
);
}
// Function to return loading JSX
const loading = () => {
  return<h1>No Movies to Display</h1>;
};
//Ternar operator will determine which functions JSX we will return
return movie ? loaded() : loading();
}