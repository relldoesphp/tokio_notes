import React from "react";
import {Col, Container, Form, Row, Button} from "react-bootstrap";

const Tags = () => {
    return (
        <Container className="mt-5">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                        <Form.Control type="text" name="title"/>
                    </Col>
                    <Col sm="4">
                        <Button variant="primary">Add Tag</Button>
                    </Col>
                </Form.Group>
            </Form>
            <Row>
                <Col sm="4">
                    <h5>Tag Name</h5>
                </Col>
                <Col sm="4">
                    <a href="#">Delete</a>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                    <h5>Tag Name</h5>
                </Col>
                <Col sm="4">
                    <a href="#">Delete</a>
                </Col>
            </Row>
            <Row>
                <Col sm="4">
                    <h5>Tag Name</h5>
                </Col>
                <Col sm="4">
                    <a href="#">Delete</a>
                </Col>
            </Row>
        </Container>
    );
}

export default Tags