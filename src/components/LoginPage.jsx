import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postUserToken, userMe } from "../redux/actions";
import Board from "./Board";

const LogPage = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelChange = (propertyName, propertyValue) => {
    setUserLogin({ ...userLogin, [propertyName]: propertyValue });
  };
  const me = useSelector((state) => state.me.content);

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postUserToken(userLogin));
  };

  if (me) {
    return <Board />;
  } else {
    return (
      <Container className="vh-100 d-flex align-items-center justify-content-between">
        <Container className="w-50 text-white">
          <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Button variant="primary" type="submit" className="me-3">
              LOG IN
            </Button>
            <Link to="/register">
              <Button variant="success">Registrati</Button>
            </Link>
          </Form>
        </Container>
      </Container>
    );
  }
};

export default LogPage;
