import "./App.css";
import Login from "./Screens/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OTP from "./Screens/OTP";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
