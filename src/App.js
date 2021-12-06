import { Routes, Route, Link } from "react-router-dom";

import { LoginPage } from "./pages/login_page.js";
import { SignUpPage } from "./pages/signup_page";
import { Homepage } from "./pages/home";
import { Sidebar } from "./pages/components/sidebar";
import Row from "react-bootstrap/Row";
function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
