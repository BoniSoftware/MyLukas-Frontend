import "../styles/footer.css";
import LogoBONIsoft  from "../assets/BONIsoft.jpg";

function Footer() {
    return (
        <footer className="footer">
            <p> MyLukas APLICACION FINANCIERA 2026 / CABCORP.com.co &copy; Todos los derechos reservados. </p>
            <div>Powered by :</div>
            <img src={LogoBONIsoft} alt="Logo" className="logoBONIsoft" />
        </footer>
    );
}

export default Footer;
