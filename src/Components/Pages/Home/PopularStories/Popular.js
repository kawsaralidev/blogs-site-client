import React from "react";
import Card from "react-bootstrap/Card";

const Popular = ({ storys }) => {
    const { image, title, smalltitle, date, name } = storys;
    return (
        <div className="col-md-3">
            <div className="text-start">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="cart">
                        <Card.Text>{smalltitle}</Card.Text>
                        <Card.Title>{title}</Card.Title>
                        <Card.Link href="#">{date}</Card.Link> \
                        <Card.Link href="#">{name}</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Popular;
