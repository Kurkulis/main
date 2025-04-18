import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

    const currentDate = new Date().toLocaleString('lt-LT', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return (
        <footer className="py-5 border-top">
            <Container>
                <Row>
                    <Col md={3}>
                        <small className="text-muted">{currentDate}</small>
                    </Col>

                    <Col md={3}>
                        <h5>Features</h5>
                        <ul className="list-unstyled">
                            <li>Cool stuff</li>
                            <li>Random feature</li>
                            <li>Team feature</li>
                            <li>Stuff for developers</li>
                            <li>Another one</li>
                            <li>Last time</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>Resource</li>
                            <li>Resource name</li>
                            <li>Another resource</li>
                            <li>Final resource</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li>Team</li>
                            <li>Locations</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;