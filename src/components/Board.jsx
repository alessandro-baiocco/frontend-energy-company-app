import { useSelector } from "react-redux";
import UserBoard from "./UserBoard";
import AdminBoard from "./AdminBoard";
import { Container } from "react-bootstrap";

const Board = () => {
  const me = useSelector((state) => state.me.content);

  if (me) {
    return me.role === "USER" ? <UserBoard /> : <AdminBoard />;
  } else {
    return <Container>CARICAMENTO.....</Container>;
  }
};
export default Board;
