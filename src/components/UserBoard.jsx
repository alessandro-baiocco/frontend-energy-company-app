import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ClientCard from "./ClientCard";

const UserBoard = () => {
  return (
    <Container>
      <h1 className="text-white mb-5">Welcome User</h1>
      <Container className="mb-3">
        {/* <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFormFilter"
          aria-expanded="false"
          aria-controls="collapseFormFilter"
        >
          Toggle width collapse
        </button> */}
        <Form className="" id="collapseFormFilter">
          <Form.Select aria-label="Default select example">
            <option>Ordina per:</option>
            <option value="1">Nome</option>
            <option value="2">Fatturato Annuale</option>
            <option value="4">Data di Inserimento</option>
            <option value="5">Data di ultimo contatto</option>
            <option value="6">provincia della sede legale</option>
          </Form.Select>
          <h4 className="text-white text-start mt-3">Filtre per:</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Fatturato Annuale</Form.Label>
            <div className="d-flex">
              <Form.Control className="me-3" type="number" placeholder="min" />
              <Form.Control type="number" placeholder="max" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Data di ultimo contatto</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Label className="text-white me-2">DA:</Form.Label>
              <Form.Control className="me-3" type="date" placeholder="min" />
              <Form.Label className="text-white me-2">A:</Form.Label>
              <Form.Control type="date" placeholder="max" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Data di inserimento</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Label className="text-white me-2">DA:</Form.Label>
              <Form.Control className="me-3" type="date" placeholder="min" />
              <Form.Label className="text-white me-2">A:</Form.Label>
              <Form.Control type="date" placeholder="max" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">search name</Form.Label>
            <Form.Control type="text" placeholder="search name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <ClientCard />
      <ClientCard />
    </Container>
  );
};
export default UserBoard;
