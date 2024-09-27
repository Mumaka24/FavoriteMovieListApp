import React from 'react';

//FavoriteList component takes in favorites as a prop
function FavoriteList({ favorites}) {
    return(
        <div>
            <h2>Favoirte Movies</h2>
            <ul>
                {favorites.map((fav) => (
                    <li key={fav.id}>{fav.tittle}</li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteList;
