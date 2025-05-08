import { Col, Container, Row } from "react-bootstrap";
import './aboutUs.scss';
import aboutImage from '../../assets/images/about.jpg';
import { BsCheck } from "react-icons/bs";


const AboutUs = ({ title, paragraph, whyChooseUsTitle, reasonsLeft, reasonsRight }) => {
    return (
        <section className="about-section" id="about">
            <Container>
                <Row>
                    <Col>
                        <img src={aboutImage}></img>
                    </Col>
                    <Col>
                        <h1>{title}</h1>
                        <div className="section-underline mb-5"></div>
                        <p>{paragraph}</p>
                        <h2>{whyChooseUsTitle}</h2>
                        <Row>
                            <Col>
                                <ul className="list-unstyled">
                                    {reasonsLeft.map((item, index) => (
                                        <li key={index} className="mb-2">
                                            <BsCheck /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    {reasonsRight.map((item, index) => (
                                        <li key={index} className="mb-2">
                                            <BsCheck /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutUs;