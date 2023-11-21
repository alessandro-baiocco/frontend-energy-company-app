import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogPage from "./components/LoginPage";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
