import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClientCard = () => {
  return (
    <Container>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <img src="..." className="img-fluid rounded-start" alt="logo_azienda_cliente" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title fs-3">nomeContatto cognomeContatto</h5>
              <Container>
                <Row className="mb-2">
                  <Col className="fw-bolder">Telefono:</Col>
                  <Col>4353535345345</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">email:</Col>
                  <Col>ayeye@gmail.com</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">fattura annuale:</Col>
                  <Col>9439</Col>
                </Row>
                <Row className="mb-2">
                  <Col className="fw-bolder">p.IVA:</Col>
                  <Col>943dsfsf43249</Col>
                </Row>
              </Container>
              <p className="card-text">
                <small className="text-body-secondary">dataInserimento</small>
                <small className="text-body-secondary">data ultimo contratto</small>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/update-client">
              <Button variant="primary me-2">
                <i class="bi bi-gear-fill"></i>
              </Button>
            </Link>

            <Button variant="danger">
              <i class="bi bi-x-lg"></i>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ClientCard;
