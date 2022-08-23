import React from "react";
import "./TopNav.css";
// import { Container, Nav } from "react-bootstrap/Container";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";

const TopNav = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                className="top_nav_bg"
            >
                {/* <Container > */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="mx-5" id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <small className="text-white" href="#home">
                            Thursday, 28 July 2022
                        </small>
                    </Nav>
                    <Nav>
                        <Navbar.Collapse className="justify-content-end ">
                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Home
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    About us
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Contact us
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Privacy Policy
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Cookies Policy
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Terms and Conditions
                                </Nav.Link>
                            </small>

                            <small>
                                <Nav.Link
                                    className="main_nav-style text-white"
                                    as={Link}
                                    to="/home"
                                >
                                    Disclaimer
                                </Nav.Link>
                            </small>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default TopNav;
