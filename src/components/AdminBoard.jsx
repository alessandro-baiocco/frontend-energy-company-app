import { Button, Card, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import ClientCard from "./ClientCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AdminBoard = () => {
  const [open, setOpen] = useState(false);
  const me = useSelector((state) => state.me.content);
  const auth = useSelector((state) => state.userToken.content);
  const [activeTab, setActiveTab] = useState("#first");

  const [minFatturato, setMinFatturato] = useState(0);
  const [maxFatturato, setMaxFatturato] = useState(0);
  const [minDataInserimento, setMinDataInserimento] = useState("");
  const [maxDataInserimento, setMaxDataInserimento] = useState("");
  const [minDataUltimoContatto, setMinDataUltimoContatto] = useState("");
  const [maxDataUltimoContatto, setMaxDataUltimoContatto] = useState("");

  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    e.preventDefault();

    // dispatch();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "#nome":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">search name</Form.Label>
              <Form.Control type="text" placeholder="search name" />
            </Form.Group>

            <Button variant="primary">Submit</Button>
          </>
        );
      case "#fatturato":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Fatturato Annuale</Form.Label>
              <div className="d-flex">
                <Form.Control className="me-3" type="number" placeholder="min" />
                <Form.Control type="number" placeholder="max" />
              </div>
            </Form.Group>
            <Button variant="primary">Submit</Button>
          </>
        );
      case "#dataInserimento":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Data di inserimento</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control className="me-3" type="date" placeholder="min" />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control type="date" placeholder="max" />
              </div>
            </Form.Group>
            <Button variant="primary">Submit</Button>
          </>
        );
      case "#dataContatto":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Data di ultimo contatto</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control className="me-3" type="date" placeholder="min" />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control type="date" placeholder="max" />
              </div>
            </Form.Group>
            <Button variant="primary">Submit</Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#home">Welcome Admin {me.nome}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="me-2">
                Home
              </Link>
              <Link to="/add-client" className="me-2">
                Save Client
              </Link>
              <Link to="/me">My Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Container className="mb-3">
          <Button
            className="mb-3"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-filter-form"
            aria-expanded={open}
          >
            Filtra per:
          </Button>
          <Collapse in={open}>
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#nome" onClick={() => handleTabClick("#nome")}>
                      Nome
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#fatturato" onClick={() => handleTabClick("#fatturato")}>
                      Fatturato
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#dataInserimento" onClick={() => handleTabClick("#dataInserimento")}>
                      data di inserimento
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#dataContatto" onClick={() => handleTabClick("#dataContatto")}>
                      data ultimo contatto
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>{renderContent()}</Card.Body>
            </Card>
            {/* <Form id="collapse-filter-form">
              <Form.Select aria-label="Default select example">
                <option>Ordina per:</option>
                <option value="1">Nome</option>
                <option value="2">Fatturato Annuale</option>
                <option value="4">Data di Inserimento</option>
                <option value="5">Data di ultimo contatto</option>
                <option value="6">provincia della sede legale</option>
              </Form.Select>
              <h4 className="text-white text-start mt-3">Filtre per:</h4>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Fatturato Annuale</Form.Label>
                <div className="d-flex">
                  <Form.Control className="me-3" type="number" placeholder="min" />
                  <Form.Control type="number" placeholder="max" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Data di ultimo contatto</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Label className="text-white me-2">DA:</Form.Label>
                  <Form.Control className="me-3" type="date" placeholder="min" />
                  <Form.Label className="text-white me-2">A:</Form.Label>
                  <Form.Control type="date" placeholder="max" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white">Data di inserimento</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Label className="text-white me-2">DA:</Form.Label>
                  <Form.Control className="me-3" type="date" placeholder="min" />
                  <Form.Label className="text-white me-2">A:</Form.Label>
                  <Form.Control type="date" placeholder="max" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">search name</Form.Label>
                <Form.Control type="text" placeholder="search name" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
          </Collapse>
        </Container>
        <ClientCard />
      </Container>
    </>
  );
};
export default AdminBoard;
