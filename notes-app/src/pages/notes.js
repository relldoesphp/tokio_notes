import {useEffect, useState} from "react";
import {Container, Card, Button, Badge, Modal, Form, Row, Col} from "react-bootstrap";

const Notes = () => {
    const [showForm, setShowForm] = useState(false);

    const handleFormClose = () => setShowForm(false);
    const handleFormShow = () => setShowForm(true);

    return (
        <>
        <Container className="mt-5">
            <Button variant="outline-dark" onClick={handleFormShow}>Add Note</Button>
            <Container className="mt-3">
                <Card>
                    <Card.Body>
                        <Card.Title>Note Title</Card.Title>
                        <Card.Text>
                            <span className="muted" align="right">Date</span>
                        </Card.Text>
                        <Card.Text>
                            Note Description - Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned.
                        </Card.Text>
                        <Card.Text>
                            <Badge bg="light" text="dark">Tag 1</Badge>{''}<Badge bg="light" text="dark">Tag 2</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <hr/>
                <Card>
                    <Card.Body>
                        <Card.Title>Note Title</Card.Title>
                        <Card.Text>
                            <p className="muted" align="right">Date</p>
                        </Card.Text>
                        <Card.Text>
                            Note Description - Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned.
                        </Card.Text>
                        <Card.Text>
                            <Badge bg="light" text="dark">Tag 1</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <hr/>
                <Card>
                    <Card.Body>
                        <Card.Title>Note Title</Card.Title>
                        <Card.Text>
                            <p className="muted" align="right">Date</p>
                        </Card.Text>
                        <Card.Text>
                            Note Description - Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard. Swab black jack ahoy Brethren of the Coast schooner poop deck main sheet topmast furl marooned.
                        </Card.Text>
                        <Card.Text>
                            <Badge bg="light" text="dark">Tag 1</Badge>{''}<Badge bg="light" text="dark">Tag 2</Badge>{''}<Badge bg="light" text="dark">Tag 3</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <hr/>
            </Container>
        </Container>
    <Modal show={showForm} onHide={handleFormClose} animation={true} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Note Title
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="title"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Description
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={3} name="description" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label column sm="2">
                        Tags
                    </Form.Label>
                    <Col sm="10">
                        <Form.Check
                            type="checkbox"
                            id="custom-switch"
                            label="Tag 1"
                        />
                        <Form.Check
                            type="checkbox"
                            id="custom-switch"
                            label="Tag 2"
                        />
                        <Form.Check
                            type="checkbox"
                            id="custom-switch"
                            label="Tag 3"
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleFormClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
    </>
    );
}

export default Notes