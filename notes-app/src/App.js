import {Container, Nav} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Notes from "./pages/notes";
import Tags from "./pages/tags";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8020/api/tags')
            .then((getData) => {
                setTags(getData.data.tags)
            })
    }, [])

    useEffect(() =>{
        axios.get('http://localhost:8020/api/notes')
            .then((getData) => {
                setNotes(getData.data.notes)
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
                  <Route path="/" element={<Notes />} />
                  <Route path="/notes" element={<Notes notes={notes} tags={tags} setNotes={setNotes} />} />
                  <Route path="/tags" element={<Tags tags={tags} setTags={setTags} />} />
              </Routes>
          </>
      );
}

export default App;
