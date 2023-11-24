import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteClient, getClientNomeContatto, getClients } from "../redux/actions";

const ClientCard = () => {
  const role = useSelector((state) => state.me.content.role);
  const clients = useSelector((state) => state.clients.content);
  const auth = useSelector((state) => state.userToken.content);
  const dispatch = useDispatch();
  useEffect(() => {
    // Esegui azioni in risposta al cambio dello store
  }, [clients, clients.length]);

  return (
    <Container>
      {
        // clients &&
        //   clients.content &&
        clients.length > 0 &&
          clients.map((client) => {
            return (
              <div className="card mb-3" key={client.id}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={client.logo} className="img-fluid rounded-start" alt="logo_azienda_cliente" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-start">
                      <h5 className="card-title fs-3">
                        {client.nomeContatto} {client.cognomeContatto}
                      </h5>
                      <Container>
                        <Row className="mb-2">
                          <Col className="fw-bolder">Telefono:</Col>
                          <Col>{client.telefono}</Col>
                        </Row>
                        <Row className="mb-2">
                          <Col className="fw-bolder">email:</Col>
                          <Col>{client.email}</Col>
                        </Row>
                        <Row className="mb-2">
                          <Col className="fw-bolder">fattura annuale:</Col>
                          <Col>{client.fatturatoAnnuale}</Col>
                        </Row>
                        <Row className="mb-2">
                          <Col className="fw-bolder">p.IVA:</Col>
                          <Col>{client.partitaIva}</Col>
                        </Row>
                      </Container>
                      <p className="card-text">
                        <small className="text-body-secondary me-5">
                          data Inserimento: <span className="fw-5">{client.dataInserimento}</span>
                        </small>
                        <small className="text-body-secondary">
                          data ultimo contratto: <span className="fw-5">{client.dataUltimoContatto}</span>
                        </small>
                      </p>
                    </div>
                  </div>
                  {role === "ADMIN" && (
                    <div className="col-md-2">
                      <Link to={`/update-client?id=${client.id}`}>
                        <Button variant="primary me-2">
                          <i className="bi bi-gear-fill"></i>
                        </Button>
                      </Link>

                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(deleteClient(auth, client.id)).then(() => {
                            dispatch(getClients(auth)); // o un'altra azione per ottenere i nuovi dati
                          });
                        }}
                      >
                        <i className="bi bi-x-lg"></i>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
      }
    </Container>
  );
};
export default ClientCard;
