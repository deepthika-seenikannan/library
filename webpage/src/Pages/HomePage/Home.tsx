import { useNavigate } from "react-router-dom";
import "./Home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src="/logo.png" alt="School Logo" className="home-logo" />
      <h1 className="home-title">MTS Tamil School Library</h1>
      <p className="home-subtitle">Welcome!</p>
      <div className="button-container">
        <button className="btn lend-book-btn" onClick={() => navigate("/lend")}>Lend Book</button>
        <button className="btn return-book-btn" onClick={() => navigate("/return")}>Return Book</button>
      </div>
    </div>
  );
}

export default HomePage;
