import { Col, Container, Row } from "react-bootstrap";
import './Features.scss';

import * as bsIcons from "react-icons/bs";

const Features = ({ title, featuresItems }) => {
    return (
        <section className="features-section text-center" id="features">
            <Container>
                <h2 className="section-title">{title}</h2>
                <div className="section-underline mx-auto mb-5"></div>

                <Row>
                    {featuresItems.map((item, index) => {
                        const IconComponent = bsIcons[item.icon];
                        return (
                            <Col key={index} md={3} className="feature-item mb-4">
                                <div className="icon-circle mx-auto mb-3">
                                    <IconComponent />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features;