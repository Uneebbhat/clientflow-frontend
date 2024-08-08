import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "@/pages/Signup/SignupPage";
import Container from "@/components/Container";
import LoginPage from "@/pages/Login/LoginPage";
import ForgotPasswordPage from "@/pages/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/ResetPassword/ResetPasswordPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Container>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </>
  );
}

export default App;
