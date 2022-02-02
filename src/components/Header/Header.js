import React from 'react';
import logo from "../../images/rsz_grocerieslogo.jpg"
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/shop"><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto header-design">
                    <Nav.Link href="/shop" active>Shop</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;