import "../styles/header.css";
import Usuario from "../assets/Usuario.jpg";    

function Header () {
    return (
        <header className="header">
             <nav className="nav">
                <a href="../pages/index.jsx" className="btn-outline">Home</a>
                <a href="../pages/Login.jsx" className="btn-dark">Login</a>
                <a href="../pages/Soporte.jsx" className="btn-dark">Soporte</a>
            </nav>
            <h3>MODULO - Iniciar Seccion</h3>
            <img src={Usuario} alt="Logo" className="Usuario"/>
        </header>
    );
}

export default Header;