import React from 'react';
import './MovieCard.css';



const MovieCard = ({ title, poster, onClick }) => {
    return (
        <div className="movie-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={poster} alt={title} />
            <h5>{title}</h5>
        </div>
    );
};

export default MovieCard;
