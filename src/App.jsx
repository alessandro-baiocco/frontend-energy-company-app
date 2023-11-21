import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogPage from "./components/LoginPage";
import UserBoard from "./components/UserBoard";
import AdminBoard from "./components/AdminBoard";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <div className="App bg-dark pb-5 min-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/user" element={<UserBoard />} />
          <Route path="/admin" element={<AdminBoard />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
