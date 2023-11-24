import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Card, Navbar } from "react-bootstrap/esm";
import { Button, Form, Container, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fattureReducer from "../../redux/reducer/fatturaReducer";
import {
  filterAnnoFatture,
  filterDataFatture,
  filterFatture,
  filterImportoFatture,
  getFattureFromIdClient,
} from "../../redux/actions";

const FattureRender = () => {
  const me = useSelector((state) => state.me.content);
  const auth = useSelector((state) => state.userToken.content);
  const dispatch = useDispatch();

  const [idCliente, setIdCliente] = useState("");
  const [activeTab, setActiveTab] = useState("#idCliente");
  const [statoFattura, setStatoFattura] = useState(null);
  const [minData, setMinData] = useState("");
  const [maxData, setMaxData] = useState("");
  const [minAnno, setMinAnno] = useState(null);
  const [maxAnno, setMaxAnno] = useState(null);
  const [minImporto, setMinImporto] = useState(null);
  const [maxImporto, setMaxImporto] = useState(null);
  const [open, setOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFilter = (url, dato) => {
    if (dato === null) dato = "PAGATA";
    dispatch(filterFatture(url, auth, dato));
  };

  const handleDataFilter = () => {
    let dataUrl = "http://localhost:8080/fattura/data";
    if (maxData === "") dataUrl = "http://localhost:8080/fattura/minData";
    if (minData === "") dataUrl = "http://localhost:8080/fattura/maxData";
    if (minData !== "" || maxData !== "") {
      dispatch(filterDataFatture(dataUrl, auth, minData, maxData));
    } else {
      alert("perfavore compila i campi");
    }
  };
  const handleAnnoFilter = () => {
    let annoUrl = "http://localhost:8080/fattura/anno";
    if (maxData === null) annoUrl = "http://localhost:8080/fattura/minAnno";
    if (minAnno === null) annoUrl = "http://localhost:8080/fattura/maxAnno";
    if (minAnno !== null || maxAnno !== null) {
      dispatch(filterAnnoFatture(annoUrl, auth, minAnno, maxAnno));
    } else {
      alert("perfavore compila i campi");
    }
  };
  const handleImportoFilter = () => {
    let importoUrl = "http://localhost:8080/fattura/importo";
    if (maxImporto === null) importoUrl = "http://localhost:8080/fattura/minImporto";
    if (minImporto === null) importoUrl = "http://localhost:8080/fattura/maxImporto";
    if (minImporto !== null || maxImporto !== null) {
      dispatch(filterImportoFatture(importoUrl, auth, minImporto, maxImporto));
    } else {
      alert("perfavore compila i campi");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "#idCliente":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">cerca per id</Form.Label>
              <Form.Control
                type="text"
                placeholder="id cliente"
                onChange={(e) => {
                  setIdCliente(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                handleFilter("http://localhost:8080/fattura/client/", idCliente);
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#stato":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">stato fattura</Form.Label>
              <div className="d-flex">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setStatoFattura(e.target.value);
                    console.log(statoFattura);
                  }}
                >
                  <option value="PAGATA">PAGATA</option>
                  <option value="NONPAGATA">NON PAGATA</option>
                  <option value="INVIATA">INVIATA</option>
                  <option value="SCADUTA">SCADUTA</option>
                </Form.Select>
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleFilter("http://localhost:8080/fattura/stato?stato=", statoFattura);
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#data":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Data fattura</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control
                  className="me-3"
                  type="date"
                  placeholder="min"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setMinData(e.target.value);
                  }}
                />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="max"
                  onChange={(e) => {
                    console.log(e.target.value);

                    setMaxData(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleDataFilter();
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#anno":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">anno fattura</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control
                  className="me-3"
                  type="number"
                  placeholder="min"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setMinAnno(e.target.value);
                  }}
                />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="max"
                  onChange={(e) => {
                    setMaxAnno(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleAnnoFilter();
              }}
            >
              Submit
            </Button>
          </>
        );
      case "#importo":
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">importo fattura</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label className="text-white me-2">DA:</Form.Label>
                <Form.Control
                  className="me-3"
                  type="number"
                  placeholder="importo minimo"
                  step="0.01"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setMinImporto(e.target.value);
                  }}
                />
                <Form.Label className="text-white me-2">A:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="importo massimo"
                  step="0.01"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setMaxImporto(e.target.value);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => {
                handleImportoFilter();
              }}
            >
              Submit
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
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
                  <Nav.Link href="#idCliente" onClick={() => handleTabClick("#idCliente")}>
                    id Cliente
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#stato" onClick={() => handleTabClick("#stato")}>
                    stato
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#data" onClick={() => handleTabClick("#data")}>
                    data
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#anno" onClick={() => handleTabClick("#anno")}>
                    anno
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#importi" onClick={() => handleTabClick("#importo")}>
                    importi
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>{renderContent()}</Card.Body>
          </Card>
        </Collapse>
      </Container>
    </>
  );
};

export default FattureRender;
