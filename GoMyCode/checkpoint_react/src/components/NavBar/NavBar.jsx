import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import React from "react";

function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Aqua Tofana Cosmetics</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Join Us</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}
export default NavBar;
