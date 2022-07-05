import {useEffect, useState} from "react";
import {Container, Card, Button, Badge, Modal, Form, Row, Col} from "react-bootstrap";
import axios from "axios";
import AddNoteForm from "../components/notes/AddNoteForm";

const Notes = ({ notes, setNotes, tags}) => {
    const [showForm, setShowForm] = useState(false);

    function handleFormClose() {
        setShowForm(false);
    }
    function handleFormShow() {
        setShowForm(true);
    }

    return (
        <>
        <Container className="mt-5">
            <Button variant="outline-dark" onClick={handleFormShow}>Add Note</Button>
            <Container className="mt-3">
                {notes.map((note) => {
                    return (
                        <>
                        <Card>
                            <Card.Body>
                                <Card.Title>{note.name}</Card.Title>
                                <Card.Text>
                                    <p className="muted" align="right">{note.created_at}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{note.description}</p>
                                </Card.Text>
                                <Card.Text>
                                    {/*{note.tags.map(noteTag => {*/}
                                    {/*    <>*/}
                                    {/*        <Badge bg="light" text="dark">{noteTag.name}</Badge>{''}*/}
                                    {/*    </>*/}
                                    {/*})}*/}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <hr/>
                        </>
                    )
                })
                }
            </Container>
        </Container>
            {showForm && <AddNoteForm showForm={showForm} handleFormClose={handleFormClose} setNotes={setNotes} tags={tags} />}
    </>
    );
}

export default Notes