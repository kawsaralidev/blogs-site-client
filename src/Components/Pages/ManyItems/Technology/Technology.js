import React from "react";
import Card from "react-bootstrap/Card";

const Technology = () => {
    return (
        <div className="mx-5">
            <span className="banner-text ">Technology</span>
            <div className="row">
                <div className="col-md-6">
                    <div className="text-start">
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://i.ibb.co/Ldnz84C/hacking-14.png"
                            />
                            <Card.Body>
                                <Card.Title>
                                    What is a native app? Explanation of the
                                    meaning and differences from web
                                    applications
                                </Card.Title>
                                <Card.Link href="#">25.08.2022</Card.Link>
                                <Card.Link href="#">Ali</Card.Link>
                                <Card.Text>
                                    A “native app” is a particular kind of
                                    program that can be downloaded from an app
                                    store like the App Store and installed on a
                                    device. For iOS and Android…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-start">
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://i.ibb.co/6097xK4/hacking-20.png"
                            />
                            <Card.Body>
                                <Card.Title>
                                    What is the best way of app development?
                                    Types of development
                                </Card.Title>
                                <Card.Link href="#">25.08.2022</Card.Link>
                                <Card.Link href="#">Ali</Card.Link>
                                <Card.Text>
                                    An organization that creates apps for
                                    multiple uses, including business and games,
                                    is known as an app development company. The
                                    app works well in a variety of scenarios as
                                    a…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
