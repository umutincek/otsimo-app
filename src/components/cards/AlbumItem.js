import React from 'react';
import {Col, ListGroup} from "react-bootstrap";

function AlbumItem({artist, src, licence, duration, name}) {
    return (
        <ListGroup>
            <ListGroup.Item
                className="d-flex justify-content-between align-items-center flex-row rounded-0 mt-2"
                style={{backgroundColor: "#F1F3F4"}}>

                <Col className="col-lg-4">
                    <p className="m-0">{name}</p>

                </Col>
                <Col className="col-lg-2">
                    <p className="m-0 ">{artist}</p>
                </Col>

                <Col className="col-lg-3">
                    <audio className="m-0 p-0" controls src={src}></audio>
                </Col>

                <Col className="col-lg-2 flex-row d-flex">
                    <a href={licence} className="m-0">Licence</a>
                    <h6 className="ml-5">{duration}</h6>
                </Col>

            </ListGroup.Item>
        </ListGroup>
    )
}


export default AlbumItem;