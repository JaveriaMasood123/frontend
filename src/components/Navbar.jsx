import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="cyber-nav">
        <div className="neon-logo">
          <Link to="/">MY_PORTFOLIO</Link>
        </div>
        <div className="neon-menu">
          {token ? (
            <>
              <Link to="/profile">EDIT PROFILE</Link>
              <Link to="/preview">PREVIEW</Link>
              <button className="glitch-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login">LOGIN</Link>
              <Link to="/register">REGISTER</Link>
            </>
          )}
        </div>
      </nav>
      <div className="holographic-border"></div>
    </>
  );
}