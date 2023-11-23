import { useSelector } from "react-redux";
import UserBoard from "./UserBoard";
import AdminBoard from "./AdminBoard";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Board = () => {
  const me = useSelector((state) => state.me.content);

  if (me) {
    return me.role === "USER" ? <UserBoard /> : <AdminBoard />;
  } else {
    return (
      <Container className="text-center pt-5">
        <Link to="/">
          <Button variant="success">torna alla pagina di login</Button>
        </Link>
      </Container>
    );
  }
};
export default Board;
