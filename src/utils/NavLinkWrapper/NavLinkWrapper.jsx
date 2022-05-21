import React from 'react';
import './NavLinkWrapper.scss';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function NavLinkWrapper({ to, children }) {
    const navigate = useNavigate();

    function handleRedirect(event) {
        navigate(event.target.getAttribute('to'));
    }

    return (
        <Nav.Link to={to} onClick={handleRedirect}>
            {children}
        </Nav.Link>
    );
}

export default NavLinkWrapper;
