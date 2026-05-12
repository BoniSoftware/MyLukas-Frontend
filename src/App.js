import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Home from "./pages/Home";
import Soporte from "./pages/Soporte";


function App() {
  return (
    <BrowserRouter>
       <Body/>
       <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />  
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/index" element={<Index />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
