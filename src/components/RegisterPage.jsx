import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [userRegister, setUserRegister] = useState({ nome: "", cognome: "", email: "", password: "" });
  const [isRegistered, setIsRegistered] = useState(false);

  const handelChange = (propertyName, propertyValue) => {
    setUserRegister({ ...userRegister, [propertyName]: propertyValue });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      nome: userRegister.nome,
      cognome: userRegister.cognome,
      email: userRegister.email,
      password: userRegister.password,
    };
    console.log(data);

    fetch("http://localhost:8080/auth/register", {
      method: "POST",

      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log("Registrato con successo!");
          setIsRegistered(true);
        } else {
          console.log(resp);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-between">
      <Container className="w-50 text-white">
        {isRegistered ? (
          <>
            <Navigate to="/" />
          </>
        ) : (
          <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                onChange={(e) => {
                  handelChange("nome", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                onChange={(e) => {
                  handelChange("cognome", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  handelChange("email", e.target.value);
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  handelChange("password", e.target.value);
                }}
              />
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
        )}
      </Container>
    </Container>
  );
};
export default RegisterPage;
