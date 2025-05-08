import { Col, Container, Row } from "react-bootstrap";
import './services.scss';
import * as faIcons from 'react-icons/fa';


const Services = ({ title, subtitle, items }) => {
    return (
        <section className="services-section" id="services">
            <Container>
                <Row>
                    <Col>
                        <h1>{title}</h1>
                        <div className="section-underline mb-5"></div>
                        <p>{subtitle}</p>

                        <Row>
                            {items.slice(0, 3).map((item, index) => {
                                const IconComponent = faIcons[item.icon];
                                return (
                                    <Col key={index} md={4} className="feature-item mb-4">
                                        <div className="icon-circle mx-auto mb-3">
                                            <IconComponent />
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                        <Row>
                            {items.slice(3).map((item, index) => {
                                const IconComponent = faIcons[item.icon];
                                return (
                                    <Col key={index} md={4} className="feature-item mb-4">
                                        <div className="icon-circle mx-auto mb-3">
                                            <IconComponent />
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </Col>
                                );
                            })}
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;