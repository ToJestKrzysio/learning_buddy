import React from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLinkWrapper from '../../utils/NavLinkWrapper/NavLinkWrapper';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="logo__link">
                        LB
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLinkWrapper to={'/train'}> Train </NavLinkWrapper>
                    <NavLinkWrapper to={'/profile'}> Profile </NavLinkWrapper>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
