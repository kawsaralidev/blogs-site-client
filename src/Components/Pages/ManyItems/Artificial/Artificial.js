import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Inteligence from "./Inteligence";

const Artificial = () => {
    const [art, setArt] = useState([]);

    useEffect(() => {
        fetch("./artificialData.json")
            .then((res) => res.json())
            .then((data) => setArt(data));
    }, []);
    return (
        <div className="mx-5">
            <span className="banner-text ">Artificial Inteligence</span>
            <div className="row">
                <Col xs md={6} sm={12}>
                    <div className="text-start">
                        <Card style={{ width: "100%" }}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://i.ibb.co/mhmssr3/Augmented-Reality-Apps-e1658961556174.webp"
                                />
                                <Card.Body>
                                    <span>ARTIFICIAL INTELIGENCE</span>
                                    <Card.Title>
                                        What is the difference between UX / UI?
                                        Simple explanations of terminology
                                    </Card.Title>
                                    <Card.Link href="#">25.08.2022</Card.Link>
                                    <Card.Link href="#">Ali</Card.Link>
                                    <Card.Text>
                                        User Experience, or UX, is a phrase used
                                        to describe the experience a user has
                                        had with a good or service. On the other
                                        side, the term “UI” (user interface)…
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card>
                    </div>
                </Col>

                <Col xs md={6}>
                    <Row className="g-3">
                        {art.map((int) => (
                            <Inteligence key={""} int={int}></Inteligence>
                        ))}
                    </Row>
                </Col>
            </div>
        </div>
    );
};

export default Artificial;
