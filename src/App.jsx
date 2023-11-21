import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogPage from "./components/LoginPage";
import UserBoard from "./components/UserBoard";

function App() {
  return (
    <div className="App bg-dark pb-5 min-height">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/user" element={<UserBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
