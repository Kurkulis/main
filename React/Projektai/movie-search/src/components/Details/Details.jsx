import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Loader from "../Loader/Loader";

const API_URL = 'http://www.omdbapi.com';
const API_KEY = 'apikey=e5425952';

const Details = ({ id, handleClose, show }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setMovie(null);

        const url = `${API_URL}?${API_KEY}&i=${id}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
                setLoading(false);
            });
    }, [id]);

    if (!movie && !loading) return null;

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            {loading ? (
                <Modal.Body className="d-flex justify-content-center py-5">
                    <Loader />
                </Modal.Body>
            ) : (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>{movie.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex gap-4 align-items-start">
                        <img src={movie.Poster} alt={movie.Title} style={{ width: '180px' }} />
                        <div>
                            <p><strong>{movie.Year}</strong></p>
                            <p>Rating: {movie.imdbRating}</p>
                            <p>{movie.Plot}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
};


export default Details;