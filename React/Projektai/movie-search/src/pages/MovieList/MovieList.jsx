import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import MovieCard from './MovieCard';
import './MovieList.css';
import Details from '../../components/Details/Details';
import Loader from '../../components/Loader/Loader';


const API_URL = 'http://www.omdbapi.com';
const API_KEY = 'apikey=e5425952';

const MovieList = () => {

    const [kintamasis, setKintamasis] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedId, setSelectedId] = useState(null);  // <- Modal state
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSearchInputChange = (e) => {
        setKintamasis(e.target.value)
    }

    const onEnterPress = (e) => {
        if (e.code === 'Enter') {
            setLoading(true);

            const url = `${API_URL}?${API_KEY}&s=${kintamasis}`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.Response === "True") {
                        setMovies(data.Search);
                    } else {
                        setMovies([]);
                    }
                })
                .finally(() => {
                    setLoading(false); // <- baigė krauti
                });
        }
    };
    return (

        <>
            <Header text="movie" />
            <SearchBar
                onChangeMethond={onSearchInputChange}
                onEnterPressMethod={onEnterPress}
            />
            {loading ? (
                <Loader />
            ) : (
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.imdbID}
                            title={movie.Title}
                            poster={movie.Poster}
                            onClick={() => {
                                setSelectedId(movie.imdbID);
                                setShowModal(true);
                            }}
                        />
                    ))}
                </div>
            )}

            {selectedId && (
                <Details
                    id={selectedId}
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                />
            )}

        </>
    );
};

export default MovieList;