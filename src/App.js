import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, createContext } from "react";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";
import User from "./pages/User";
import AboutUs from "./pages/Aboutus";
import Cinema from "./pages/Cinema";
import Movie from "./components/Movie";
import Info from "./pages/Info";
import Home from "./pages/Home/data";
import Error_404 from "./pages/Error_404";

export const dataContext = createContext("");

function App() {
  return (
    <div className="App">
      <dataContext.Provider value={"123"}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<User />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="cinema" element={<Cinema />} />
              <Route path="/info" element={<Info />} />
              <Route path="*" element={<Error_404 />} />
              <Route path="/booking" element={<Cinema />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </dataContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
