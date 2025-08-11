// src/pages/Login.jsx
import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
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
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="app-card login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          name="email"
          className="app-input login-input"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          className="app-input login-input"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          className="app-btn login-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="app-text login-text">
          Don't have an account?{" "}
          <a href="/register" className="app-link login-link">Register</a>
        </p>
      </form>
    </div>
  );
}
