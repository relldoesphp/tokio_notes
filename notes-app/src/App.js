import {Container, Nav} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Notes from "./pages/notes";
import Tags from "./pages/tags";
import {useEffect, useState} from "react";
import axios from "axios";
import apiService from "./services/apiService";

function App() {

    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        apiService.getAllNotes().then((getData) => {
            setNotes(getData.data.notes)
        })
    }, [])

    useEffect(() => {
        apiService.getAllTags().then((getData) => {
            setTags(getData.data.tags)
        })
    }, [])

    return (
          <>
              <Container className="mt-5">
                  <Nav variant="tabs" defaultActiveKey="/notes" as="ul">
                      <Nav.Item as="li">
                          <Nav.Link eventKey="/notes" href="/notes">Notes</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link eventKey="/tags" href="/tags">Tags</Nav.Link>
                      </Nav.Item>
                  </Nav>
              </Container>
              <Routes>
                  <Route path="/" element={<Notes notes={notes} tags={tags} setNotes={setNotes} />} />
                  <Route path="/notes" element={<Notes notes={notes} tags={tags} setNotes={setNotes} />} />
                  <Route path="/tags" element={<Tags tags={tags} setTags={setTags} />} />
              </Routes>
          </>
      );
}

export default App;
