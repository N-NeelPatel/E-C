import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">eShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/cart"><i className='fas fa-shopping-cart' />Cart</Nav.Link>
                        <Nav.Link href="/login"><i className='fas fa-user' />Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}