import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container className="vh-100 d-flex align-items-center justify-content-between">
      <Container className="w-50 text-white">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cognome</Form.Label>
            <Form.Control type="text" placeholder="Cognome" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-flex justify-content-between align items-center">
            <Button variant="primary" type="submit" className="me-3">
              REGISTRATI
            </Button>
            <Link to="/">
              <Button variant="danger">Back to LOG IN</Button>
            </Link>
          </div>
        </Form>
      </Container>
    </Container>
  );
};
export default RegisterPage;
