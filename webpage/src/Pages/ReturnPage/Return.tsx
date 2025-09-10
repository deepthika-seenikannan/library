import { useNavigate } from "react-router-dom";

export default function ReturnPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-xl font-bold mb-4">Return Page</h1>
      <button
        onClick={() => navigate(-1)} // go back in history
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
    </div>
  );
}
