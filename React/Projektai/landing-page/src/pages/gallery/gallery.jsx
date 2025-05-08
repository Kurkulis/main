import { Col, Container, Row } from "react-bootstrap";
import './gallery.scss';


const Gallery = ({ title, subtitle, images }) => {
    return (
        <section className="gallery-section" id="gallery">
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                        <div className="section-underline mb-5"></div>
                        <p>{subtitle}</p>
                    </Col>
                </Row>
                <Row>

                    {images.map((img, i) => (
                        <Col key={i} md={4} sm={6} xs={12} className="p-0">
                            <div className="gallery-wrapper">
                                <img
                                    src={`/portfolio/${img}`}
                                    className="img-fluid gallery-img"
                                />
                                <div className="overlay">
                                    View
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    );
};

export default Gallery;