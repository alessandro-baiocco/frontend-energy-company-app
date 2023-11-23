import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const me = useSelector((state) => state.me.content);

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={me.avatar} />
        <Card.Body>
          <Card.Title>
            {me.nome} {me.cognome}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{me.email}</ListGroup.Item>
          <ListGroup.Item>{me.role}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/board">
            <Button variant="danger">Back client</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default MyProfile;
