import { useEffect, useState } from "react";
import { Button, Card, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFattura } from "../redux/actions";
import CardsFatture from "./fatture/CardsFatture";
import AdminBoard from "./AdminBoard";
import { Link } from "react-router-dom";
import FattureRender from "./fatture/FattureRender";

const PageFatture = () => {
  const auth = useSelector((state) => state.userToken.content);
  //   const role = useSelector((state) => state.me.content.role);
  const fatture = useSelector((state) => state.fatture.content);
  const me = useSelector((state) => state.me.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFattura(auth));
  }, []);

  useEffect(() => {
    // Esegui azioni in risposta al cambio dello store
    console.log("ok");
  }, [fatture, fatture?.length]);

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#home">Welcome Admin {me?.nome}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="me-2">
                Home
              </Link>
              <Link to="/add-client" className="me-2">
                Save Client
              </Link>
              <Link to="/me" className="me-2">
                My Profile
              </Link>
              <Link to="/fatture">fatture</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FattureRender />
      <Container>
        {fatture?.length > 0 &&
          fatture.map((fattura, i) => (
            <CardsFatture fattura={fattura} role={me?.role} key={"fattura " + i} auth={auth} />
          ))}
      </Container>
    </>
  );
};

export default PageFatture;
