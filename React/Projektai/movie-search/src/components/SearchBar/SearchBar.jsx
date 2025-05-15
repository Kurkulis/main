import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchBar.css';
import { Container } from 'react-bootstrap';


const SearchBar = ({ onChangeMethond, onEnterPressMethod }) => {


    return (

        <div className="movie-search-section">
            <Container className="text-center">
                <h1 className="text-white fw-bold">Search Jusu megstamiausia Movie</h1>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="kokio filmo ieskai?"
                        className="search-input"
                        onChange={onChangeMethond}
                        onKeyUp={onEnterPressMethod}
                    />
                </div>
            </Container>
        </div>
    );
};

export default SearchBar;