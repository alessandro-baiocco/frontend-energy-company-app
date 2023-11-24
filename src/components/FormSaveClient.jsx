import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addClient } from "../redux/actions";

const FormSaveClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.userToken.content);

  const [savedClient, setSavedClient] = useState({
    ragioneSociale: "",
    partitaIva: "",
    email: "",
    fatturatoAnnuale: 0,
    pec: "",
    telefono: "",
    emailContatto: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    formaGiuridica: "",
    indirizzo: {
      via: "",
      cap: 0,
      comune: "o",
    },
  });
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/regions/provincie", {
      headers: {
        Authorization: "Bearer " + auth,
      },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((reg) => {
        setRegions(reg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="justify-content-between">
      <Container className="w-50 text-white">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Ragione Sociale</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ragione Sociale"
              onChange={(e) => {
                setSavedClient({ ...savedClient, ragioneSociale: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Partita IVA</Form.Label>
            <Form.Control
              type="number"
              placeholder="p.IVA"
              onChange={(e) => {
                setSavedClient({ ...savedClient, partitaIva: e.target.value });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setSavedClient({ ...savedClient, email: e.target.value });
              }}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Contatto</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setSavedClient({ ...savedClient, emailContatto: e.target.value });
              }}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fatturato Annuale</Form.Label>
            <Form.Control
              type="double"
              placeholder="fattura Annuale"
              onChange={(e) => {
                setSavedClient({ ...savedClient, fatturatoAnnuale: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pec</Form.Label>
            <Form.Control
              type="email"
              placeholder="Pec email"
              onChange={(e) => {
                setSavedClient({ ...savedClient, pec: e.target.value });
              }}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="tel"
              onChange={(e) => {
                setSavedClient({ ...savedClient, telefono: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono Contatto</Form.Label>
            <Form.Control
              type="tel"
              placeholder="tel"
              onChange={(e) => {
                setSavedClient({ ...savedClient, telefonoContatto: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome Contatto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={(e) => {
                setSavedClient({ ...savedClient, nomeContatto: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cognome Contatto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cognome"
              onChange={(e) => {
                setSavedClient({ ...savedClient, cognomeContatto: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Forma Giuridica</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                console.log(e.target.value);
                setSavedClient({ ...savedClient, formaGiuridica: e.target.value });
              }}
            >
              <option>...</option>
              <option value="PA">PA</option>
              <option value="SAS">SAS</option>
              <option value="SPA">SPA</option>
              <option value="SRL">SRL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Via</Form.Label>
            <Form.Control
              type="text"
              placeholder="via"
              onChange={(e) => {
                console.log(e.target.value);
                setSavedClient({ ...savedClient, indirizzo: { ...savedClient.indirizzo, via: e.target.value } });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CAP</Form.Label>
            <Form.Control
              type="number"
              placeholder="cap"
              onChange={(e) => {
                console.log(e.target.value);
                setSavedClient({ ...savedClient, indirizzo: { ...savedClient.indirizzo, cap: e.target.value } });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comune</Form.Label>
            <Form.Control
              type="text"
              placeholder="comune"
              onChange={(e) => {
                setSavedClient({ ...savedClient, indirizzo: { ...savedClient.indirizzo, comune: e.target.value } });
              }}
            />
          </Form.Group>

          <div className="d-flex justify-content-between align items-center">
            <Button
              variant="primary"
              className="me-3"
              onClick={() => {
                dispatch(addClient(auth, savedClient)).then(() => {
                  navigate("/board");
                });
              }}
            >
              salva cliente
            </Button>
            <Link to="/board">
              <Button variant="danger">Back client</Button>
            </Link>
          </div>
        </Form>
      </Container>
    </Container>
  );
};
export default FormSaveClient;
