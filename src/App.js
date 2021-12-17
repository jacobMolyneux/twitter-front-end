import { Routes, Route, Link } from "react-router-dom";

import { LoginPage } from "./pages/login_page.js";
import { SignUpPage } from "./pages/signup_page";
import { Homepage } from "./pages/home";
import { Sidebar } from "./pages/components/sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div>
      <Row className="border bottom">
        <h1>Fake Twitter</h1>
      </Row>
      <div className="d-flex border" style={{ width: "100%" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
