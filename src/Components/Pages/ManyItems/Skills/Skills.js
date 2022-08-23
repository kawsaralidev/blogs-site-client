import React from "react";
import Card from "react-bootstrap/Card";


const Skills = () => {
    return (
        <div className="mx-5">
            <span className="banner-text ">Skills</span>
            <div className="row">
                <div className="col-md-6">
                    <div className="text-start">
                        <Card style={{ width: "100%" }}>
                            <Card.Img
                                variant="top"
                                src="https://i.ibb.co/mhmssr3/Augmented-Reality-Apps-e1658961556174.webp"
                            />
                            <Card.Body>
                                <Card.Title>
                                    What is the difference between UX / UI?
                                    Simple explanations of terminology
                                </Card.Title>
                                <Card.Link href="#">25.08.2022</Card.Link>
                                <Card.Link href="#">Ali</Card.Link>
                                <Card.Text>
                                    User Experience, or UX, is a phrase used to
                                    describe the experience a user has had with
                                    a good or service. On the other side, the
                                    term “UI” (user interface)…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-start">
                        <Card style={{ width: "100%" }}>
                            <Card.Img
                                variant="top"
                                src="https://i.ibb.co/t3sVz3Q/Deep-Learning-e1658961945838.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    What is the difference between UX / UI?
                                    Simple explanations of terminology
                                </Card.Title>
                                <Card.Link href="#">25.08.2022</Card.Link>
                                <Card.Link href="#">Ali</Card.Link>
                                <Card.Text>
                                    User experience (UX) design is the process
                                    of creating all user interactions with
                                    artificial objects (products, systems, and
                                    services). Having exceptional design and
                                    functionality is no longer enough to set…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
