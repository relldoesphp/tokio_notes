import {Container, Nav} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Notes from "./pages/notes";
import Tags from "./pages/tags";

function App() {
  return (
      <>
          <Container className="mt-5">
              <Nav variant="tabs" defaultActiveKey="/notes" as="ul">
                  <Nav.Item as="li">
                      <Nav.Link href="/notes">Notes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Nav.Link href="/tags">Tags</Nav.Link>
                  </Nav.Item>
              </Nav>
          </Container>
          <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/tags" element={<Tags />} />
          </Routes>
      </>
  );
}

export default App;
