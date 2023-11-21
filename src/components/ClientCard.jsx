import { Col, Container, Row } from "react-bootstrap";

const ClientCard = () => {
  return (
    <Container>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="logo_azienda_cliente" />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title fs-3">nomeContatto cognomeContatto</h5>
              <Container>
                <Row>
                  <Col className="fw-bolder">Telefono:</Col>
                  <Col>4353535345345</Col>
                </Row>
                <Row>
                  <Col className="fw-bolder">email:</Col>
                  <Col>ayeye@gmail.com</Col>
                </Row>
                <Row>
                  <Col className="fw-bolder">fattura annuale:</Col>
                  <Col>9439</Col>
                </Row>
                <Row>
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
        </div>
      </div>
    </Container>
  );
};
export default ClientCard;
