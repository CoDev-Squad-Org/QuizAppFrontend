import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Register } from "./pages/registerPage/Register";
import LoginForm from "./components/Login/LoginForm";
import { PrincipalPage } from "./pages/PrincipalPage/PrincipalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Home" element={<PrincipalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
