import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "@/pages/Signup/SignupPage";
import Container from "@/components/Container";
import LoginPage from "@/pages/Login/LoginPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Container>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
