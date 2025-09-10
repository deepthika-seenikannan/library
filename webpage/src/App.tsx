import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import LoginPage from "./Pages/LoginPage/Login";
import HomePage from "./Pages/HomePage/Home";
import LendPage from "./Pages/LendPage/Lend";
import ReturnPage from "./Pages/ReturnPage/Return";
import PrivateRoute from "./Components/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/lend"
            element={
              <PrivateRoute>
                <LendPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/return"
            element={
              <PrivateRoute>
                <ReturnPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}