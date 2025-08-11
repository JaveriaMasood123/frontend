// src/pages/Register.jsx
import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./App.css"

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await API.post("/auth/register", form);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="app-card" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className="error-text">{error}</p>}
      <input
        type="text"
        name="name"
        className="app-input"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        className="app-input"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        className="app-input"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button className="app-btn" type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      <p className="app-text">
        Already have an account?{" "}
        <a href="/login" className="app-link">Login</a>
      </p>
    </form>
  );
}
