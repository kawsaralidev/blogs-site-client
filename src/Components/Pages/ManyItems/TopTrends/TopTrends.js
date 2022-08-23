import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Trends from "./Trends";


const TopTrends = () => {
    const [top, setTop] = useState([]);

    useEffect(() => {
        fetch("./trendsData.json")
            .then((res) => res.json())
            .then((data) => setTop(data));
    }, []);
    return (
        <div className="mx-5">
            <span className="banner-text ">Top Trends</span>
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
                                    <span>Latest</span>
                                    <Card.Title>
                                        What is Web3? An easy-to-understand and
                                        the relationship with Metaverse / NFT
                                    </Card.Title>
                                    <Card.Link href="#">25.08.2022</Card.Link>
                                    <Card.Link href="#">Ali</Card.Link>
                                    <Card.Text>
                                        User Experience, or UX, is a phrase used
                                        to describe the experienceA public
                                        blockchain-based Internet concept is
                                        called Web3. Web 2.0 is a more
                                        sophisticated style of thinking that
                                        allows users to voluntarily engage in
                                        the information flow. It is primarily…
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card>
                    </div>
                </Col>

                <Col xs md={6}>
                    <Row className="g-3">
                        {top.map((trend) => (
                            <Trends key={""} trend={trend}></Trends>
                        ))}
                    </Row>
                </Col>
            </div>
        </div>
    );
};

export default TopTrends;
