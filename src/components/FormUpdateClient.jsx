import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const FormUpdateClient = () => {
  return (
    <Container className="justify-content-between">
      <Container className="w-50 text-white">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Ragione Sociale</Form.Label>
            <Form.Control type="text" placeholder="Ragione Sociale" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Partita IVA</Form.Label>
            <Form.Control type="number" placeholder="p.IVA" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fatturato Annuale</Form.Label>
            <Form.Control type="double" placeholder="fattura Annuale" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pec</Form.Label>
            <Form.Control type="email" placeholder="Pec email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="tel" placeholder="tel" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome Contatto</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cognome Contatto</Form.Label>
            <Form.Control type="text" placeholder="Cognome" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Forma Giuridica</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>...</option>
              <option value="1">PA</option>
              <option value="2">SAS</option>
              <option value="4">SPA</option>
              <option value="5">SRL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Via</Form.Label>
            <Form.Control type="text" placeholder="via" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CAP</Form.Label>
            <Form.Control type="number" placeholder="cap" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comune</Form.Label>
            <Form.Control type="text" placeholder="comune" />
          </Form.Group>

          <div className="d-flex justify-content-between align items-center">
            <Button variant="primary" type="submit" className="me-3">
              salva cliente
            </Button>
            <Link to="/admin">
              <Button variant="danger">Back client</Button>
            </Link>
          </div>
        </Form>
      </Container>
    </Container>
  );
};
export default FormUpdateClient;
