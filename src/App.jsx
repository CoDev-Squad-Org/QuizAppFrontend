import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Register } from "./pages/registerPage/Register";
import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
