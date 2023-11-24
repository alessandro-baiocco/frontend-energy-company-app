import { Button, Card, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFattura, fetchFattura, putFattura } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";

const CardsFatture = (props) => {
  useEffect(() => {
    // Esegui azioni in risposta al cambio dello store
    console.log("ok");
  }, [props]);

  const [show, setShow] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);

  const dispatch = useDispatch();

  return (
    <>
      <div className={`card mb-3 ${show ? "d-block" : "d-none"}`} key={props.fattura.id}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title fs-3">
                {props.fattura?.client.nomeContatto} {props.fattura?.client.cognomeContatto}{" "}
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  ID Cliente:
                  {props.fattura?.client.id}
                </p>
              </h5>
              <Container>
                <Row className="mb-2">
                  <Col className="fw-bolder">numero fattura:</Col>
                  <Col>{props.fattura?.numero}</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">data:</Col>
                  <Col>{props.fattura?.data}</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">importo:</Col>
                  <Col>{Math.floor(props.fattura?.importo)}</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">STATO:</Col>
                  <Col>{props.fattura?.stato}</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">ID FATTURA:</Col>
                  <Col>{props.fattura?.id}</Col>
                </Row>
              </Container>
            </div>
          </div>
          {props.role === "ADMIN" && (
            <div className="col-md-2">
              <Button
                variant="primary me-2"
                onClick={() => {
                  setModal(true);
                  setModalText(props.fattura);
                }}
              >
                <i className="bi bi-gear-fill"></i>
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  dispatch(deleteFattura(props.auth, props.fattura.id));
                  setShow(false);
                }}
              >
                <i className="bi bi-x-lg"></i>
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* <Modal show={modal} onHide={setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica fattura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titolo*</Form.Label>
              <Form.Control
                value={.role}
                onChange={(e) => handleChange("role", e.target.value)}
                required
                type="text"
                placeholder="Inserisci la tua professione"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tempo di impiego</Form.Label>
              <Form.Select required placeholder="Tempo di Impiego">
                <option value="1">Full-Time</option>
                <option value="2">Part-time</option>
                <option value="3">Autonomo</option>
                <option value="3">Free-Lance</option>
                <option value="3">A Contratto</option>
                <option value="3">Stage</option>
                <option value="3">Apprendistato</option>
                <option value="3">Stagionale</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci la tua professione"
                autoFocus
                value={}
                onChange={(e) => handleChange("area", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Azienda*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci la tua azienda"
                autoFocus
                value={}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Inserisci la tua professione"
                autoFocus
                value={}
                onChange={(e) => handleChange("startDate", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                placeholder="Inserisci la tua professione"
                autoFocus
                value={}
                onChange={(e) => handleChange("endDate", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <input
                type="file"
                autoFocus
                accept="image/*"
                onChange={(e) => handleChange("image", e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={(e) => {
              dispatch(putFattura());
              e.preventDefault();
             setModal(false);
            }}
          >
            AGGIUNGI
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default CardsFatture;
