import { useNavigate } from "react-router-dom";
import "./Lend.css";

export default function LendPage() {
  const navigate = useNavigate();

  return (
    <div className="lend-container">
      <h1 className="lend-title">Lend Books</h1>
      <h4 className="student-details">Student Details</h4>
      <div className="input student-id">
        <label>Student ID</label>
        <input
          type="text"
        />
        <div className="input student-dropdown">
          <select
            // value={selectedCategory}
            // onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="others">Others</option>
          </select>
        </div>

      </div>
      <div className="input student-name">
        <label>Student Full Name</label>
        <input
          type="text"
        />
      </div>
      <h4 className="book-details">Book Details</h4>
      <div className="input book-number">
        <label>Book Number</label>
        <input
          type="text"
        />
      </div>
      <div className="input book-description">
        <label>Book Description</label>
        <input
          type="text"
        />
      </div>
      <div className="book-details-row">
        <div className="row-input remarks">
          <label>Remarks</label>
          <input
            type="text"
          />
        </div>
        <div className="row-input quality">
          <label>Quality</label>
          <input
            type="text"
          />
        </div>
        <div className="row-input isbn">
          <label>ISBN</label>
          <input
            type="text"
          />
        </div>
      </div>
      <div className="book-list">
        <label>Book List</label>
        <textarea
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Back
      </button>
    </div>
  );
}
