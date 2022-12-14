import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Mechanics from "./components/Mechanics";
import RequireAuth from "./components/RequireAuth";
import ServiceDetail from "./pages/ServiceDetail";
import Checkout from "./pages/Checkout";

const App = () => {
  const [navbarHeight, setNavbarHeight] = useState("");

  return (
    <div>
      <div className="min-h-screen">
        <Navbar setNavbarHeight={setNavbarHeight} />
        <Routes>
          <Route path="/" element={<Home navbarHeight={navbarHeight} />} />
          <Route
            path="/services"
            element={<Services navbarHeight={navbarHeight} />}
          />
          <Route
            path="/service/:id"
            element={<ServiceDetail navbarHeight={navbarHeight} />}
          />
          <Route
            path="/mechanics"
            element={<Mechanics navbarHeight={navbarHeight} />}
          />
          <Route
            path="/about"
            element={<About navbarHeight={navbarHeight} />}
          />
          <Route
            path="/contact"
            element={<Contact navbarHeight={navbarHeight} />}
          />
          <Route
            path="/login"
            element={<Login navbarHeight={navbarHeight} />}
          />
          <Route
            path="/register"
            element={<Register navbarHeight={navbarHeight} />}
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout navbarHeight={navbarHeight} />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound navbarHeight={navbarHeight} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
