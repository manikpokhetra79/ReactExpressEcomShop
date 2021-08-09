import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
    return (
        <header>
           <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>               
                    <i className="fab fa-shopify fa-2x"></i>ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <LinkContainer to='/cart'>
                <Nav.Link>
                    <i className="fas fa-shopping-cart fa-2x"></i> Cart
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                <Nav.Link>
                    <i className="fas fa-user fa-2x"></i> Signin
                    </Nav.Link>
                </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
