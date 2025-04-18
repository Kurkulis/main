import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Mygtukas from '../Button/button';
import './header.css'


const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='custom-navbar'>
                    <Navbar.Brand href="#home">Company name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#link">Features</Nav.Link>
                            <Nav.Link href="#link">Enterprise</Nav.Link>
                            <Nav.Link href="#link">Support</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>
                            <Mygtukas />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;