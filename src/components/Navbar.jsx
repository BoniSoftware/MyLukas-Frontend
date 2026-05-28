import { NavLink, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import Usuario from "../assets/Usuario.jpg";    

function Navbar () {

    const location = useLocation();
    const titulo = {
        "/home": "MODULO - Pagina Principal",
        "/login": "MODULO - Inicio de Sesión",
        "/registro": "MODULO - Registro de Usuario",
        "/index": "MODULO - Menu de Usuario",
        "/entradas": "MODULO - Entradas de Dinero",
        "/salidas": "MODULO - Salidas de Dinero",
        "/soporte": "MODULO - Soporte de Aplicacion",
    }[location.pathname] || "MODULO";

    return (
        <nav className="navbar">
            <div className="nav">
                <NavLink 
                    to="/home"
                    className={({ isActive }) => isActive ? "btn-outline active" : "btn-outline"}
                >Home
                </NavLink>
                <NavLink 
                    to="/login"
                    className={({ isActive }) => isActive ? "btn-outline active" : "btn-outline"}
                >Login
                </NavLink>
                <NavLink 
                    to="/soporte"
                    className={({ isActive }) => isActive ? "btn-outline active" : "btn-outline"}
                >Soporte
                </NavLink>
            </div>
            <h3>{titulo}</h3>
            <img src={Usuario} alt="Usuario" className="Usuario"/>
        </nav>
    );
}

export default Navbar;