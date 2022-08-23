import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/home"
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/blog"
                        >
                            Blogs
                        </Nav.Link>
                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/blog"
                        >
                            Latest
                        </Nav.Link>
                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/blog"
                        >
                            Technology
                        </Nav.Link>
                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/blog"
                        >
                            Model
                        </Nav.Link>
                        <Nav.Link
                            className="main_nav-style text-white"
                            as={Link}
                            to="/blog"
                        >
                            Artificial Intelligence
                        </Nav.Link>
                        <NavDropdown
                            style={{ color: "white" }}
                            // className=" text-white"
                            title="Machine Learning"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Supervised Learning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Unsupervised Learning
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Rainforcement Learning
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <FormGroup className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </FormGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default navigation;
