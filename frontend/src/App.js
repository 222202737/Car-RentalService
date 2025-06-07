import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Tariff from "./Pages/Tariff";
import Contact from "./Pages/Contact";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <>
      <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="tariff" element={<Tariff />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
