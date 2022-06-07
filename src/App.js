import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";
import User from "./pages/User";
import AboutUs from "./pages/Aboutus";
import Info from "./pages/Info";
import Home from "./pages/Home/data";
import Error_404 from "./pages/Error_404";
import Booking from "./pages/Booking";
import Feature from "./pages/Feature";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/info" element={<Info />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<Error_404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
