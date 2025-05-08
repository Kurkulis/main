import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = ({ title, navigationItems }) => {


    return (

        <Navbar>
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {navigationItems.map(item => (
                            <Nav.Link key={item} href={'#' + item}>{item}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;