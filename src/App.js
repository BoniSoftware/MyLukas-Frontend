import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login"; 
import Registro from "./pages/Registro";
import Home from "./pages/Home";

function App() {
  return (
     <><Body /><Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <Footer />
      </div>
    </Router></>
  );
}
 
export default App;
