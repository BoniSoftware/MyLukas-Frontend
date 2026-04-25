import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Home from "./pages/Home";

function App() {
  return (
    <><Body/>
      <Navbar/>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/index" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
            </Routes>
          </div>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
