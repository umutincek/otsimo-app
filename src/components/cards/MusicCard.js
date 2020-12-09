import React from "react";
import {Card, Col} from "react-bootstrap";

function MusicCard({licence, image, src, name}) {

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={styles.card} className="mt-4 mb-4">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className="p-0">{name}</Card.Title>
                    <a style={styles.licence} href={licence}>See Licence</a>
                </Card.Body>
                <Card.Footer className="m-0 p-0 d-flex bg-light">
                    <audio id="player" controls src={src}></audio>
                </Card.Footer>
            </Card>
        </Col>
    )
}


const styles = {
    card: {
        minHeight: 430,

    },
};


export default MusicCard;

