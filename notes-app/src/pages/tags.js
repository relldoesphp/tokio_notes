import React, {useEffect, useState} from "react";
import {Col, Container, Form, Row, Button} from "react-bootstrap";
import axios from "axios";
import apiService from "../services/apiService";

const Tags = ({tags, setTags}) => {

    const [newTag, setNewTag] = useState('');

    async function handleDelete(id) {
        await apiService.deleteTag(id)
        await apiService.getAllTags().then((getData) => {
            setTags(getData.data.tags)
        }).catch(e => {
            console.log(e);
        });
    }

    async function handleCreate() {
        await apiService.createTag({'name': newTag})
        await apiService.getAllTags().then((getData) => {
            setTags(getData.data.tags)
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <Container className="mt-5">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                        <Form.Control onChange={(e) => setNewTag(e.target.value)} type="text" name="name" value={newTag} />
                    </Col>
                    <Col sm="4">
                        <Button variant="primary" onClick={() => handleCreate()}>Add Tag</Button>
                    </Col>
                </Form.Group>
            </Form>
            {tags.map((tag) => {
                return (
                    <Row>
                        <Col sm="4">
                            <h5>{tag.name}</h5>
                        </Col>
                        <Col sm="4">
                            <Button variant="outline-danger" onClick={() => handleDelete(tag.id)}>Delete</Button>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    );
}

export default Tags