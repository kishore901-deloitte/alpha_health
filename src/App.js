import { useContext } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserState from "./components/contexts/UserState";
import AdminDashboard from "./components/AdminDashboard";
import UserContext from "./components/contexts/UserContext";
import ProtectedRoutes from "./utils/ProtectedRoutes"

function App() {
  return (
    <div className="App">
      <UserState>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserState>
    </div>
  );
}

export default App;
