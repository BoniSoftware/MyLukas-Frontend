import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Index from "./pages/Index";
import Entradas from "./pages/Entradas";
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
            <Route path="/entradas" element={<Entradas />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
