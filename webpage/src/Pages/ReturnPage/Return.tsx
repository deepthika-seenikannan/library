import { useNavigate } from "react-router-dom";
import "./Return.css";

export default function ReturnPage() {
  const navigate = useNavigate();

  return (
    <div className="return-container">
      <h1 className="return-title">Return Books</h1>
      <div className="input book-detail">
        <label>Book Number</label>
        <input
          type="text"
        />
      </div>
      <div className="input book-number">
        <label>Book Number</label>
        <input
          type="text"
        />
        <input
          type="text"
        />
      </div>
      <div className="input remarks">
        <label>Remarks</label>
        <input
          type="text"
        />
      </div>
      <div className="input quality">
        <label>Quality</label>
        <input
          type="text"
        />
      </div>
      <div className="input student-id">
        <label>Student ID</label>
        <input
          type="text"
        />
        <input
          type="text"
        />
        <input
          type="text"
        />
        <input
          type="text"
        />
      </div>
      <div className="input teacher-name">
        <label>Teacher Full Name</label>
        <input
          type="text"
        />
        <input
          type="text"
        />
      </div>
      <div className="input date-time">
        <label>Checked In Date/Time</label>
        <input
          type="text"
        />
      </div>
      <div className="back-button-container">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}