import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileForm from "./pages/ProfileForm";
import ProfilePreview from "./pages/ProfilePreview";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="center-container">
              <h1 className="typing-text">MY PORTFOLIO APP</h1>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/preview" element={<ProfilePreview />} />
      </Routes>
    </Router>
  );
}
