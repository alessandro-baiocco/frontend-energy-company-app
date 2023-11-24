import { Button, Card, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFattura } from "../../redux/actions";
import { useEffect } from "react";
import { Col } from "react-bootstrap/esm";

const CardsFatture = (props) => {
  useEffect(() => {
    // Esegui azioni in risposta al cambio dello store
    console.log("ok");
  }, [props]);

  const dispatch = useDispatch();

  return (
    <div className="card mb-3" key={props.fattura.id}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body text-start">
            <h5 className="card-title fs-3">
              {props.fattura?.client.nomeContatto} {props.fattura?.client.cognomeContatto} id cliente:
              {props.fattura?.client.id}
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
            </Container>
          </div>
        </div>
        {/* {role === "ADMIN" && (
                    <div className="col-md-2">
                      <Link to={{ pathname: "/update-client", state: { key: props.fattura.id } }}>
                        <Button variant="primary me-2">
                          <i className="bi bi-gear-fill"></i>
                        </Button>
                      </Link>

                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(deleteClient(auth, props.fattura.id)).then(() => {
                            dispatch(getClients(auth)); // o un'altra azione per ottenere i nuovi dati
                          });
                        }}
                      >
                        <i className="bi bi-x-lg"></i>
                      </Button>
                    </div>
                  )} */}
      </div>
    </div>
  );
};

export default CardsFatture;
