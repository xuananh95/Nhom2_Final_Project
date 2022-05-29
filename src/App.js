import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";

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
                    </Routes>
                </Layout>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

export default App;
