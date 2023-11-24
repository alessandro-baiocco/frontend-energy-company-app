import { Button, Card, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import ClientCard from "./ClientCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getClientMaxDataInserimento,
  getClientMaxFatturato,
  getClientMinDataInserimento,
  getClientMinFatturato,
  getClientNomeContatto,
  getClientRangeFatturato,
  getClients,
} from "../redux/actions";

const AdminBoard = () => {
  const [open, setOpen] = useState(false);
  const me = useSelector((state) => state.me.content);
  const auth = useSelector((state) => state.userToken.content);
  const [activeTab, setActiveTab] = useState("#nome");
  const [minFatturato, setMinFatturato] = useState(0);
  const [maxFatturato, setMaxFatturato] = useState(0);
  const [minDataInserimento, setMinDataInserimento] = useState("");
  const [maxDataInserimento, setMaxDataInserimento] = useState("");
  const [minDataUltimoContatto, setMinDataUltimoContatto] = useState("");
  const [maxDataUltimoContatto, setMaxDataUltimoContatto] = useState("");
  const [nome, setNome] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients(auth));
  }, []);

  const handleNameFilter = () => {
    dispatch(getClientNomeContatto(auth, nome));
  };

  const handleFatturatoFilter = () => {
    if (minFatturato !== "" && maxFatturato !== "") {
      dispatch(getClientRangeFatturato(auth, minFatturato, maxFatturato));
    } else if (minFatturato !== "") {
      dispatch(getClientMinFatturato(auth, minFatturato));
    } else if (maxFatturato !== "") {
      dispatch(getClientMaxFatturato(auth, maxFatturato));
    }
  };

  const handleDataInserimentoFilter = () => {
    if (minDataInserimento !== "" && maxDataInserimento !== "") {
      // dispatch(get(auth, minFatturato, maxFatturato));
    } else if (minDataInserimento !== "") {
      dispatch(getClientMinDataInserimento(auth, minDataInserimento));
    } else if (maxDataInserimento !== "") {
      dispatch(getClientMaxDataInserimento(auth, maxDataInserimento));
    }
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
              <Form.Control
                type="text"
                placeholder="search name"
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                handleNameFilter();
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#fatturato":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Fatturato Annuale</Form.Label>
              <div className="d-flex">
                <Form.Control
                  className="me-3"
                  type="number"
                  placeholder="min"
                  onChange={(e) => {
                    setMinFatturato(e.target.value);
                  }}
                />
                <Form.Control
                  type="number"
                  placeholder="max"
                  onChange={(e) => {
                    console.log(e.target.value);

                    setMaxFatturato(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleFatturatoFilter();
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#dataInserimento":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Data di inserimento</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control
                  className="me-3"
                  type="date"
                  placeholder="min"
                  onChange={(e) => {
                    console.log(e.target.value);

                    setMinDataInserimento(e.target.value);
                  }}
                />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="max"
                  onChange={(e) => {
                    console.log(e.target.value);

                    setMaxDataInserimento(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleDataInserimentoFilter();
              }}
            >
              Submit
            </Button>
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
          </Collapse>
        </Container>
        <ClientCard />
      </Container>
    </>
  );
};
export default AdminBoard;
