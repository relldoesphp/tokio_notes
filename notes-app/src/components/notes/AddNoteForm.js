import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";


const AddNoteForm = ({showForm, handleFormClose, setNotes, tags}) => {

    const [form, setForm] = useState({'title': '', 'description':'', 'tags': [] })

    function handleOnChange(event) {
        const {value, name} = event.target
        setForm({...form, [name]:value})
    }

    function addNote()  {
        axios.create('http://localhost:8020/api/notes', {

        }).then((getData) => {
            setNotes(getData.data.notes)
        });
        setForm({'title': '', 'description':'', 'tags': [] })
        handleFormClose();
    }

    return (
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
                            <Form.Control onChange={handleOnChange} value={form.title} type="text" name="title"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control onChange={handleOnChange} value={form.description} as="textarea" rows={3} name="description" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label column sm="2">
                            Tags
                        </Form.Label>
                        <Col sm="10">
                            {tags.map((tag) => {
                                return (
                                    <Form.Check
                                        type="checkbox"
                                        id={'tag_'+tag.id}
                                        label={tag.name}
                                    />
                                )
                            })}

                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleFormClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNote}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default AddNoteForm;