import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../Users/Users";
import { useAuth } from "../../Components/AuthContext";
import "./Login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validUser = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (validUser) {
      login(); // sets isLoggedIn = true
      navigate("/home", { replace: true }); // replaces history
    } else {
      alert("Invalid username or password");
    }
  };  

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Logo" className="login-logo" />
      <h1 className="login-title">MTS Tamil School Library</h1>
      <h1 className="login-subtitle">Login</h1>
      <input
        type="text"
        className="login-username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}