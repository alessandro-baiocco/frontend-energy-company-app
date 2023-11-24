import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getClients } from "../redux/actions";

const FormUpdateClient = () => {
  const auth = useSelector((state) => state.userToken.content);
  const location = useLocation();
  const navigate = useNavigate();
  const key = new URLSearchParams(location.search).get("id");
  const dispatch = useDispatch();

  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/clients/" + key, {
      headers: {
        Authorization: "Bearer " + auth,
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((cli) => {
        const newCli = { ...cli };
        // delete newCli.formaGiuridica;
        delete newCli.dataInserimento;
        delete newCli.dataUltimoContatto;
        delete newCli.id;
        delete newCli.logo;
        delete newCli.indirizzo;
        setClient(newCli);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="justify-content-between">
      <Container className="w-50 text-white">
        {client && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ragione Sociale</Form.Label>
              <Form.Control
                type="text"
                placeholder={client.ragioneSociale}
                defaultValue={client.ragioneSociale}
                onChange={(e) => {
                  setClient({ ...client, ragioneSociale: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Partita IVA</Form.Label>
              <Form.Control
                type="number"
                placeholder={client.partitaIva}
                defaultValue={client.partitaIva}
                onChange={(e) => {
                  setClient({ ...client, partitaIva: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={client.email}
                defaultValue={client.email}
                onChange={(e) => {
                  setClient({ ...client, email: e.target.value });
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Contatto</Form.Label>
              <Form.Control
                type="email"
                placeholder={client.emailContatto}
                defaultValue={client.emailContatto}
                onChange={(e) => {
                  setClient({ ...client, emailContatto: e.target.value });
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fatturato Annuale</Form.Label>
              <Form.Control
                type="double"
                placeholder={client.fatturatoAnnuale}
                defaultValue={client.fatturatoAnnuale}
                onChange={(e) => {
                  setClient({ ...client, fatturatoAnnuale: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pec</Form.Label>
              <Form.Control
                type="email"
                placeholder={client.pec}
                defaultValue={client.pec}
                onChange={(e) => {
                  setClient({ ...client, pec: e.target.value });
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="tel"
                placeholder={client.telefono}
                defaultValue={client.telefono}
                onChange={(e) => {
                  setClient({ ...client, telefono: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefono Contatto</Form.Label>
              <Form.Control
                type="tel"
                placeholder={client.telefonoContatto}
                defaultValue={client.telefonoContatto}
                onChange={(e) => {
                  setClient({ ...client, telefonoContatto: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome Contatto</Form.Label>
              <Form.Control
                type="text"
                placeholder={client.nomeContatto}
                defaultValue={client.nomeContatto}
                onChange={(e) => {
                  setClient({ ...client, nomeContatto: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome Contatto</Form.Label>
              <Form.Control
                type="text"
                placeholder={client.cognomeContatto}
                defaultValue={client.cognomeContatto}
                onChange={(e) => {
                  setClient({ ...client, cognomeContatto: e.target.value });
                }}
              />
            </Form.Group>

            <div className="d-flex justify-content-between align items-center">
              <Button
                variant="primary"
                className="me-3"
                onClick={() => {
                  fetch("http://localhost:8080/clients/" + key, {
                    headers: {
                      Authorization: "Bearer " + auth,
                      "Content-Type": "application/json",
                    },
                    method: "PUT",
                    body: JSON.stringify(client),
                  })
                    .then((resp) => {
                      if (resp.ok) {
                        dispatch(getClients(auth));
                        navigate("/board");
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                salva cliente
              </Button>
              <Link to="/board">
                <Button variant="danger">Back client</Button>
              </Link>
            </div>
          </Form>
        )}
      </Container>
    </Container>
  );
};
export default FormUpdateClient;
