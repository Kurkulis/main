import { Button, Container } from "react-bootstrap";
import './Header.scss'

const Header = ({ title, subtitle, button }) => {
    return (
        <>

            <div className="header-section d-flex align-items-center">
                <Container className="text-center text-white">
                    <h1 className="display-4 fw-bold">{title}</h1>
                    <p className="lead">{subtitle}</p>
                    <Button variant="primary" size="lg">{button}</Button>
                </Container>
            </div>

        </>
    );
};

export default Header;