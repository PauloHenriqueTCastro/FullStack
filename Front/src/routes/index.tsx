import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
