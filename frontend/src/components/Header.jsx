import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>eShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><i className='fas fa-shopping-cart' />Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><i className='fas fa-user' />Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}