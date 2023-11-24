import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogPage from "./components/LoginPage";
import UserBoard from "./components/UserBoard";
import AdminBoard from "./components/AdminBoard";
import RegisterPage from "./components/RegisterPage";
import FormSaveClient from "./components/FormSaveClient";
import FormUpdateClient from "./components/FormUpdateClient";
import Board from "./components/Board";
import MyProfile from "./components/MyProfile";
import PageFatture from "./components/PageFatture";

function App() {
  return (
    <div className="App bg-dark pb-5 min-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/me" element={<MyProfile />} />
          {/* <Route path="/user" element={<UserBoard />} />
          <Route path="/admin" element={<AdminBoard />} /> */}
          <Route path="/board" element={<Board />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-client" element={<FormSaveClient />} />
          <Route path="/update-client" element={<FormUpdateClient />} />
          <Route path="/fatture" element={<PageFatture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
